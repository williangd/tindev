const Dev = require('../models/Dev');

module.exports = {
  async store(req, res) {
    const { user } = req.headers;
    const { devId } = req.params;

    const loggedDev = await Dev.findById(user);
    if (!loggedDev) {
      return res.status(400).json({ error: 'User not exists' });
    }

    const targetDev = await Dev.findById(devId);
    if (!targetDev) {
      return res.status(400).json({ error: 'Dev not exists' });
    }

    if (targetDev.likes.includes(loggedDev._id)) {
      console.log('Deu match');
    }

    if (!loggedDev.likes.includes(targetDev._id)) {
      loggedDev.likes.push(targetDev._id);

      await loggedDev.save();
    }

    res.json(loggedDev);
  },
};
