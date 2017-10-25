import React from 'react';
import ReactDom from 'react-dom';

// import Apple from './js/components/apple.jsx';
import Pine from './js/components/pine.jsx';
import './css/index.scss';

const container = document.getElementById('app');

ReactDom.render(<Pine />, container);
