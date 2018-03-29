import React from 'react';
import { createStore, applyMiddleware } from 'redux';
// middleware
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';

export default class Users extends React.Component {
  constructor() {
    super();

    this.state = this.initialState;
    const middleWare = applyMiddleware(thunk, promise(), createLogger());
    this.userStore = createStore(this.reducer, this.initialState, middleWare);
    this.userStore.subscribe(this.handleChange);
  }

  componentDidMount() {
    this.userStore.dispatch((dispatch) => {
      dispatch({ type: 'FETCH_USER_PENDING' });
      fetch('https://randomuser.me/api/?results=10')
        .then(resp => resp.json())
        .then(result => dispatch({ type: 'FETCH_USER_FULFILLED', payload: result.results }))
        .catch(error => dispatch({ type: 'FETCH_USER_REJECTED', payload: error }));
    });
  }

  initialState = {
    fetching: false,
    fetched: false,
    users: [],
    error: null,
  }

  reducer = (state = this.initialState, action) => {
    switch (action.type) {
      case 'FETCH_USER_PENDING': {
        return { ...state, fetching: true };
      }
      case 'FETCH_USER_FULFILLED': {
        return {
          ...state,
          fetched: true,
          fetching: false,
          users: action.payload,
        };
      }
      case 'FETCH_USER_REJECTED': {
        return { ...state, fetching: true, error: action.payload };
      }
      default:
        return state;
    }
  }

  handleChange = () => {
    console.log('----------Handle change ', this.userStore.getState());
    this.setState(this.userStore.getState());
  }

  render() {
    const {
      users, fetching, error, fetched,
    } = this.state;
    if (fetching) {
      return <div>loading...</div>;
    } else if (error) {
      return <div>{error.message}</div>;
    } else if (fetched) {
      return (
        <div className="user-page">
          { users.map(user => <p key={user.login.username}>{user.login.username}</p>) }
        </div>
      );
    }
    return (
      <div className="user-page">
        users page
      </div>
    );
  }
}
