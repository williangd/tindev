const axios = require('axios');
const Dev = require('../models/Dev');

/** Cadastra um dev */
async function store(req, res) {
  const { username } = req.body;

  const userExists = await Dev.findOne({ user: username });
  if (userExists) {
    return res.json(userExists);
  }

  const response = await axios.get('https://api.github.com/users/' + username);
  const { name, bio, avatar_url: avatar } = response.data;

  const dev = await Dev.create({
    name,
    user: username,
    bio,
    avatar,
  });

  res.json(dev);
}
/** Lista os devs que o user ainda não deu like ou dislike */
async function index(req, res) {
  const { user } = req.headers;
  if (!user) {
    return res.status(400).json({ error: 'invalid user' });
  }

  const loggedDev = await Dev.findById(user);

  const users = await Dev.find({
    $and: [
      { _id: { $ne: loggedDev._id } },
      { _id: { $nin: loggedDev.likes } },
      { _id: { $nin: loggedDev.dislikes } },
    ],
  });

  res.json(users);
}

/** Lista todos os devs */
const all = async (_, res) => res.json(await Dev.find());

module.exports = {
  store,
  index,
  all,
};
