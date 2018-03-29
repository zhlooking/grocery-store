import React from 'react';
import { connect } from 'react-redux';
import { fetchGuests } from './actions/guestsActions';
import { fetchUser } from './actions/userActions';

const mapState2Props = store => {
  return { user: store.user, guests: store.guests };
};

const mapDispatch2Props = dispatch => {
  return {
    fetchGuests: () => dispatch(fetchGuests()),
    fetchUser: () => dispatch(fetchUser()),
  };
};

@connect(mapState2Props, mapDispatch2Props)
export default class Users extends React.Component {
  componentDidMount() {
    this.props.fetchGuests();
    this.props.fetchUser();
  }

  render() {
    const { user, guests } = this.props;

    const {
      fetching, error, fetched, users,
    } = guests;
    let guestDom = null;
    if (fetching) {
      guestDom = <div>loading...</div>;
    } else if (error) {
      guestDom = <div>{error.stack}</div>;
    } else if (fetched) {
      guestDom = (
        <ul>
          { users.map(u => <li key={u.login.username}>{u.login.username}</li>) }
        </ul>
      );
    }

    return (
      <div className="user-page">
        <div style={{ backgroundColor: 'lightblue', width: 200, height: 200 }}>
          <div>user name   {user.name}</div>
          <div>user age    {user.age}</div>
        </div>
        <div style={{
          backgroundColor: 'lightgreen',
          width: 200,
          height: 200,
          marginTop: 20,
        }}
        >
          {guestDom}
        </div>
      </div>
    );
  }
}
