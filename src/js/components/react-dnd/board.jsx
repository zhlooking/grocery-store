import React from 'react';
import PropTypes from 'prop-types';
import Knight from './knight.jsx';
import Square from './square.jsx';
import { observe } from './store.js';
import '../../../css/dnd.scss';


class Board extends React.Component {
  static propTyps = {
    knightPosition: PropTypes.arrayOf(
      PropTypes.number.isRequired,
    ).isRequired,
  }

  _renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    const black = (x + y) % 2 === 1;

    const [knightX, knightY] = this.props.knightPosition;
    const piece = (x === knightX && y === knightY) ?
      <Knight /> :
      null;

    return (
      <div
        key={i}
        style={{ width: '12.5%', height: '12.5%' }}
      >
        <Square black={black}>
          {piece}
        </Square>
      </div>
    );
  }

  render() {
    const squares = [];
    for (let i = 0; i < 64; i++) {
      squares.push(this._renderSquare(i));
    }

    return (
      <div id="dnd-page">
        {squares}
      </div>
    );
  }
}

const Dnd = () => {
  return observe(position => <Board knightPosition={position} />);
};

export default Dnd;
