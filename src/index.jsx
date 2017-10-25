import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './js/components/home.jsx';
import Apple from './js/components/apple.jsx';
import Pine from './js/components/pine.jsx';
import './css/index.scss';

ReactDom.render((
  <Router>
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/apple' component={Apple} />
      <Route exact path='/pine' component={Pine} />
    </div>
  </Router>
), document.getElementById('app'));
