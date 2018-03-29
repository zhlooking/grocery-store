import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import configSentry from './sentry';

import Home from './js/components/home';
import Pine from './js/components/pine';
import Apple from './js/components/apple';
import Dog from './js/components/dog';
import Users from './js/components/user';
import Test from './js/components/test';
import Raven from './js/components/raven';
import Carousel from './js/components/carousel';
import Lemon from './js/components/lemon';
import Nut from './js/components/HOC/nut';
import Keras from './js/keras/keras';
// import Message from './js/components/Context/Message';
import Message from './js/components/Context/MessageWithContext';
import ReactDnd from './js/components/react-dnd/board';
import ErrorPage from './js/components/error';
import './index.scss';

ReactDom.render((
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/apple' component={Apple} />
      <Route exact path='/dog' component={Dog} />
      <Route exact path='/pine' component={Pine} />
      <Route exact path='/test' component={Test} />
      <Route exact path='/carousel' component={Carousel} />
      <Route exact path='/dnd' component={ReactDnd} />
      <Route exact path='/keras' component={Keras} />
      <Route exact path='/raven' component={Raven} />
      <Route exact path='/context' component={Message} />
      <Route exact path='/lemon' component={Lemon} />
      <Route exact path='/nut' component={Nut} />
      <Route exact path='/users' component={Users} />
      <Route component={ErrorPage} />
    </Switch>
  </Router>
), document.getElementById('app'));

configSentry();
