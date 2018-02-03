import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import configSentry from './sentry.js';

import Home from './js/components/home.jsx';
import Pine from './js/components/pine.jsx';
import Apple from './js/components/apple.jsx';
import Test from './js/components/test.jsx';
import Raven from './js/components/raven.jsx';
import Carousel from './js/components/carousel.jsx';
import ReactDnd from './js/components/react-dnd/board.jsx';
import './index.scss';

ReactDom.render((
  <Router>
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/apple' component={Apple} />
      <Route exact path='/pine' component={Pine} />
      <Route exact path='/test' component={Test} />
      <Route exact path='/carousel' component={Carousel} />
      <Route exact path='/dnd' component={ReactDnd} />
      <Route exact path='/raven' component={Raven} />
    </div>
  </Router>
), document.getElementById('app'));

configSentry();
