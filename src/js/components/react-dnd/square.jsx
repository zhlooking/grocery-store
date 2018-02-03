import React from 'react';
import PropTypes from 'prop-types';


export default class Square extends React.Component {
  static propTypes = {
    black: PropTypes.bool,
  };

  static defaultProps = {
    black: true,
  }

  constructor(props) {
    super(props);

    this.title = 'Square';
  }

  render() {
    const { black } = this.props;
    const fill = black ? 'black' : 'white';
    const stroke = black ? 'white' : 'black';

    return (
      <div
        className="square"
        style={{
          backgroundColor: fill,
          color: stroke,
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
