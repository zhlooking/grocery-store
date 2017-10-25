import React from 'react';
import '../../css/pine.scss';
import newsImage from '../../img/new.png';

export default class Apple extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: 'brown',
    };
  }

  render() {
    return (
      <div className="pine-container">
        <h1>PineApple</h1>
        <p>color: <span>{this.state.color}</span></p>
        <img src={newsImage} alt="测试数据信息" />
        <div className="show-box" />
      </div>
    );
  }
}
