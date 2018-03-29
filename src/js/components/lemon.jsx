import React from 'react';

export default class Lemon extends React.Component {
  state = {
    loading: true,
    users: [],
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=10')
      .then((resp) => {
        if (!resp.ok) {
          throw Error(resp.statusText);
        }
        this.setState({ loading: false });
        return resp;
      })
      .then(resp => resp.json())
      .then(result => this.setState({ users: result.results }));
  }

  render() {
    const { loading, users } = this.state;

    if (loading) {
      return <div className="loading">loading...</div>;
    }

    return (
      <div className="lemon">
        {users.map(user => <div className="user">{user.login.username}</div>)}
      </div>
    );
  }
}
