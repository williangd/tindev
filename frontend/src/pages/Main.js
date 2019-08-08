import React from 'react';

import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';
import './Main.css';

export default ({ match }) => (
  <div className="main-container">
    <img src={logo} alt="Tindev" />
    <ul>
      <li>
        <img src="https://avatars2.githubusercontent.com/u/3803611?v=4" alt="" />
        <footer>
          <strong>Filipi Saci</strong>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, ad sed eligendi
            dolor ducimus temporibus ipsa veniam totam deleniti enim modi sint quia et consequatur
            saepe earum? Fuga, asperiores? Numquam.
          </p>
        </footer>

        <div className="buttons">
          <button type="button">
            <img src={dislike} alt="Dislike" />
          </button>
          <button type="button">
            <img src={like} alt="Like" />
          </button>
        </div>
      </li>
    </ul>
  </div>
);
