import React from 'react';
import { connect } from 'react-redux';
import { wash, eat, rot } from './actions/appleActions';

const state2Props = (store) => ({ ...store.apple });

const dispatch2Props = (dispatch) => {
  return {
    actionWash: () => dispatch(wash()),
    actionEat: () => dispatch(eat()),
    actionRot: () => dispatch(rot()),
  };
};

@connect(state2Props, dispatch2Props)
class Apple extends React.Component {
  render() {
    const {
      dirty, remainingBites, color, actionEat, actionWash, actionRot,
    } = this.props;
    return (
      <div>
        <h3>Apple</h3>

        <div><p>Is Apple Dirty?  <span>{dirty ? 'Dirty' : 'Clean'}</span></p></div>
        <div><p>RemainingBites   <span>{remainingBites}</span></p></div>
        <div><p>Color            <span>{color}</span></p></div>

        <div>Options:</div>
        <div>
          <button onClick={actionWash}>wash</button>
          <button onClick={actionEat}>eat</button>
          <button onClick={actionRot}>rot</button>
        </div>

      </div>
    );
  }
}

export default Apple;

