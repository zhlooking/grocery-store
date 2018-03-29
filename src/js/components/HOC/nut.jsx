import React from 'react';

// accept component and return a new component
// const EnhancedComponent = highOrderComponent(WrappedComponent)


class Users extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    DataSource.init();
    this.state = {
      users: DataSource.getUsers(),
    };
  }

  componentDidMount() {
    DataSource.addChangeListener(this.handleChange);
  }

  componentWillUnmount() {
    DataSource.removeChangeListener(this.handleChange);
  }

  handleChange() {
    this.setState({ users: DataSource.getUsers() });
  }

  render() {
    const { users } = this.state;
    const list = users.map(user => <div key={user.login.username} className="user">{user.login.username}</div>);
    return (
      <div className="nut">
        this is users page
        {list}
      </div>
    );
  }
}

class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    DataSource.init();
    this.state = {
      users: DataSource.getUsers(),
    };
  }

  componentDidMount() {
    DataSource.addChangeListener(this.handleChange);
  }

  componentWillUnmount() {
    DataSource.removeChangeListener(this.handleChange);
  }

  handleChange() {
    this.setState({ users: DataSource.getUsers() });
  }

  render() {
    const { users } = this.state;
    const list = users.map(user => <div key={user.email} className="user">{user.email}</div>);
    return (
      <div className="nut">
        this is emails page
        {list}
      </div>
    );
  }
}

const Nut = () => {
  return (
    <div>
      <Users />
      <div style={{ marginTop: 30 }} />
      <Posts />
    </div>
  );
};

export default Nut;

class DataSource {
  static init() {
    this.listeners = [];
    this.users = [];
    this.hasError = false;
    this.loading = true;
    this.initData();
  }

  static initData() {
    this.fetchUsers();
  }

  static getUsers() {
    return this.users;
  }

  static addChangeListener(fn) {
    this.listeners.push(fn);
  }

  static removeChangeListener(fn) {
    const index = this.listeners.indexOf(fn);
    if (index > -1) {
      this.listeners.splice(index, 1);
    }
  }

  static notifyListeners() {
    this.listeners.forEach((fn) => {
      fn.apply();
    });
  }

  static fetchUsers() {
    fetch('https://randomuser.me/api/?results=10')
      .then(resp => resp.json())
      .then((result) => {
        this.users = result.results;
        this.notifyListeners();
      });
  }
}


const withSubscription = (WrappedComponent, selectedData) => {
  // returns another component
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        data: selectedData(DataSource, props),
      };
    }

    componentDidMount() {
      DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
      DataSource.removeChangeListener(this.handleChange);
    }

    handleChange() {
      this.setState({
        data: selectedData(DataSource, this.props),
      });
    }

    render() {
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
};


const logProps = (WrappedComponent) => {
  return class extends React.Component {
    componentWillReceiveProps(nextProps) {
      console.log('current props', this.props);
      console.log('next props', nextProps);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};


export { logProps, withSubscription };
