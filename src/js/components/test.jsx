import React from 'react';
import '../../css/test.scss';

const PureTest = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div className="test-container">
        <TestInner />
      </div>
      <div className="test-container" />
    </div>
  );
};

export default PureTest;

class TestInner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      test: true,
    };
  }

  render() {
    return (
      <div className="wrapper">
        <p className="content">
          {this.state.test ? 'testing' : 'valid'}
        </p>
        <button onClick={this.setState({ test: this.state.test })}>切换状态</button>
      </div>
    );
  }
}
