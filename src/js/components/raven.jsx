import React from 'react';
import Raven from 'raven-js';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hasError: false, error: null, info: null };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true, error, info });

    Raven.captureException(error, { extra: info });
  }

  render() {
    if (this.state.hasError) {
      console.log('-------------> has error rendered');

      return (
        <div>
          <h1>Something went wrong.</h1>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.info.componentStack}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}

class BuggyCounter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleAddNumber = () => {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  }

  render() {
    if (this.state.count === 3) {
      throw new Error('Crash Test');
    }

    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.handleAddNumber}>+1</button>
      </div>
    );
  }
}

export default function CountWrapper() {
  return <ErrorBoundary><BuggyCounter /></ErrorBoundary>;
}
