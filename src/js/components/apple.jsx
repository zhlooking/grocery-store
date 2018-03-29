import { createStore } from 'redux';
import React from 'react';


class Apple extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.initialApple;

    this.appleStore = createStore(this.appleReducer, this.initialApple);
    this.appleStore.subscribe(this.applyChanges);
  }

  applyChanges = () => {
    this.setState(this.appleStore.getState());
  }

  initialApple = {
    dirty: true,
    remainingBites: 5,
    color: 'red',
  }

  appleReducer(state = this.initialApple, action) {
    switch (action.type) {
      case WASH.type:
        return {
          ...state, dirty: false,
        };
      case EAT.type:
        return {
          ...state, remainingBites: Math.max(0, state.remainingBites - action.bites),
        };
      case ROT.type:
        return {
          ...state, remainingBites: 0, color: 'brown', dirty: true,
        };
      default:
        return state;
    }
  }

  render() {
    return (
      <div>
        <h3>Apple</h3>

        <div><p>Is Apple Dirty?  <span>{this.state.dirty ? 'Dirty' : 'Clean'}</span></p></div>
        <div><p>RemainingBites   <span>{this.state.remainingBites}</span></p></div>
        <div><p>Color            <span>{this.state.color}</span></p></div>

        <div>Options:</div>
        <div>
          <button onClick={() => this.appleStore.dispatch(WASH)}>wash</button>
          <button onClick={() => this.appleStore.dispatch(EAT)}>eat</button>
          <button onClick={() => this.appleStore.dispatch(ROT)}>rot</button>
        </div>

      </div>
    );
  }
}

const WASH = { type: 'wash' };
const EAT = { type: 'eat', bites: 2 };
const ROT = { type: 'rot' };

export default Apple;

