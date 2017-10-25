import React from 'react';
import '../../css/pine.scss';


export default class Apple extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: 'yellow',
    };
  }

  render() {
    return (
      <div className="pine-container">
        <h1>Pine</h1>
        <p>color: <span>{this.state.color}</span></p>
      </div>
    );
  }
}
