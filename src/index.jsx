import React from 'react';
import ReactDom from 'react-dom';

const title = 'this is the minimal test';

ReactDom.render(
  <div>{title}</div>,
  document.getElementById('app')
)
