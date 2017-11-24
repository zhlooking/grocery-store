import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/pine.scss';

export default () => {
  return (
    <div className="home-container">
      <ul>
        <li><Link to="/apple">Apple</Link></li>
        <li><Link to="/pine">Pine</Link></li>
        <li><Link to="/test">Test</Link></li>
        <li><Link to="/carousel">Carousel</Link></li>
      </ul>
    </div>
  );
};
