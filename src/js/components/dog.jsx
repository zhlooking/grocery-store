/* eslint-disable no-restricted-globals */
import React from 'react';
import { connect } from 'react-redux';
import { play, sleep, wash, pee, decreaseBall, increaseBall } from './actions/dogActions';

const mapState2Props = (store) => ({ ...store.body, ...store.balls });
const mapDispatch2Props = (dispatch) => {
  return {
    iplay: () => dispatch(play()),
    iwash: () => dispatch(wash()),
    isleep: () => dispatch(sleep()),
    ipee: () => dispatch(pee()),
    idecreaseBall: () => dispatch(decreaseBall()),
    iincreaseBall: () => dispatch(increaseBall()),
  };
};

@connect(mapState2Props, mapDispatch2Props)
export default class Dog extends React.Component {
  render() {
    const {
      name,
      balls,
      dirty,
      bodyLevel,
      iwash,
      iplay,
      isleep,
      ipee,
      idecreaseBall,
      iincreaseBall,
    } = this.props;

    return (
      <div className="dog">
        <p>{`name ${name}`}</p>
        <p>{`balls ${balls}`}</p>
        <p>{`dirty ${dirty}`}</p>
        <p>bodyLevel {bodyLevel}</p>
        <button onClick={iincreaseBall}>加球</button>
        <button onClick={idecreaseBall}>减球</button>
        <button onClick={iplay}>玩耍</button>
        <button onClick={iwash}>洗澡</button>
        <button onClick={isleep}>睡觉</button>
        <button onClick={ipee}>suisui</button>
      </div>
    );
  }
}
