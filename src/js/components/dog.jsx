/* eslint-disable no-restricted-globals */
import React from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';


export default class Dog extends React.Component {
  constructor() {
    super();

    this.state = {
      balls: { ...this.ballsState },
      body: { ...this.bodyState },
    };
    const reducers = combineReducers({
      balls: this.ballsReducer,
      body: this.bodyReducer,
    });
    this.dogStore = createStore(reducers, {
      balls: { ...this.ballsState },
      body: { ...this.bodyState },
    }, this.genMiddleware());
    this.dogStore.subscribe(this.handleChange);
  }

  genMiddleware = () => {
    const logger = () => next => action => {
      console.info('action fired', action.type);
      if (action.type === 'WASH') {
        if (confirm('Sure to WASH the dog?')) {
          console.warn('----> action fired WASH', action.type);
          next(action);
        }
      } else {
        next(action);
      }
    };

    const error = () => next => action => {
      try {
        next(action);
      } catch (e) {
        console.error('Error ', e);
      }
    };

    return applyMiddleware(logger, error);
  }

  ballsState = {
    balls: 0,
    name: 'Perry',
  }

  bodyState = {
    dirty: false,
    bodyLevel: 5,
  }

  bodyReducer = (state = this.bodyState, action) => {
    console.log('-------> body reducer');

    switch (action.type) {
      case 'PLAY':
        return { ...state, dirty: true, bodyLevel: state.bodyLevel + 1 };
      case 'SLEEP':
        return { ...state, bodyLevel: state.bodyLevel - 1 };
      case 'WASH':
        return { ...state, dirty: false };
      case 'PEE':
        throw new Error('uhg, --> pee');
      default:
        return state;
    }
  }

  ballsReducer = (state = this.ballsState, action) => {
    console.log('---> balls reducer');

    switch (action.type) {
      case 'INCREASE':
        return { ...state, balls: state.balls + 1 };
      case 'DECREASE':
        return { ...state, balls: state.balls - 1 };
      default:
        return state;
    }
  }

  handleChange = () => {
    const currentState = this.dogStore.getState();
    console.log('----------> handleChange ', currentState);
    this.setState({ ...currentState });
  }

  render() {
    const {
      balls: { name, balls }, body: { dirty, bodyLevel },
    } = this.state;

    return (
      <div className="dog">
        <p>{`name ${name}`}</p>
        <p>{`balls ${balls}`}</p>
        <p>{`dirty ${dirty}`}</p>
        <p>bodyLevel {bodyLevel}</p>
        <button onClick={() => this.dogStore.dispatch({ type: 'INCREASE' })}>加球</button>
        <button onClick={() => this.dogStore.dispatch({ type: 'DECREASE' })}>减球</button>
        <button onClick={() => this.dogStore.dispatch({ type: 'PLAY' })}>玩耍</button>
        <button onClick={() => this.dogStore.dispatch({ type: 'WASH' })}>洗澡</button>
        <button onClick={() => this.dogStore.dispatch({ type: 'SLEEP' })}>睡觉</button>
        <button onClick={() => this.dogStore.dispatch({ type: 'PEE' })}>suisui</button>
      </div>
    );
  }
}
