import React from 'react';
import '../../css/apple.css';

export default class Apple extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: 'red',
    };
  }

  render() {
    return (
      <div className="apple-container">
        <h1>Apple</h1>
        <p>color: <span>{this.state.color}</span></p>
      </div>
    );
  }
}
