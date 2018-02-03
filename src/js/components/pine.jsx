import React from 'react';
import '../../css/pine.scss';
import newsImage from '../../img/new.png';

export default class Apple extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: 'brown',
      value: 9,
    };
  }

  // handleOnKeyDown = (evt) => {
  //   const { value } = evt.target;
  //   console.log('------------------> handleOnKeyDown', value);
  // }

  // handleOnKeyUp = (evt) => {
  //   let { value } = evt.target;
  //   console.log('-------------------> origin value', value);
  //   value = value.replace(/[^\d]/g, '');
  //   this.setState({ value });
  //   console.log('------------------> handleOnKeyUp', value);
  // }

  handleInputChange = (evt) => {
    let { value } = evt.target;
    const matched = /^\d+\.?\d{0,2}$/.test(value);
    if (!matched) {
      value = value.substring(0, value.length - 1);
    }
    this.setState({ value });
  }

  // handleOnBlur = (evt) => {
  //   const { value } = evt.target;
  //   console.log('------------------> handleOnBlur', value);
  // }

  handleTextChange = () => {
    // const { value } = evt.target;
  }

  gbLen(string) {
    let len = 0;
    for (let i = 0; i < string.length; i++) {
      if (string.charCodeAt(i) > 127 || string.charCodeAt(i) === 94) {
        len += 2;
      } else {
        len += 1;
      }
    }
    return len;
  }

  handleOnPaste = (evt) => {
    // const clipData = window.clipboardData.getData('Text');
    console.log('-------------> handleOnPaste Clip Data', evt, evt.clipboardData.getData('Text'));
  }

  render() {
    const { value } = this.state;

    return (
      <div className="pine-container">
        <h1>PineApple</h1>
        <p>color: <span>{this.state.color}</span></p>
        <img src={newsImage} alt="测试数据信息" />
        <div className="show-box" />

        <AlertWrapper show>
          <input
            className="input"
            type="text"
            onChange={this.handleTextChang}
            onPaste={this.handleOnPaste}
          />
        </AlertWrapper>

        <input
          className="input"
          value={value}
          type="number"
          step="1"
          onChange={this.handleInputChange}
          onKeyUp={this.handleOnKeyUp}
          onBlur={this.handleOnBlur}
          onKeyDown={this.handleOnKeyDown}
        />
      </div>
    );
  }
}

const AlertWrapper = ({ title = '这里出错了哦~', show = false, children }) => {
  return (
    <div className="alert-wrapper">
      {children}
      {show ? <div className='alert'>{title}</div> : null}
    </div>
  );
};

