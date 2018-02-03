import React from 'react';
import '../../css/test.scss';

// const PureTest = () => {
//   return (
//     <div style={{ display: 'flex' }}>
//       <div className="test-container">
//         <TestInner />
//       </div>
//       <div className="test-container" />
//     </div>
//   );
// };

// class TestInner extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       test: true,
//     };
//   }
//
//   render() {
//     return (
//       <div className="wrapper">
//         <p className="content">
//           {this.state.test ? 'testing' : 'valid'}
//         </p>
//         <button onClick={this.setState({ test: this.state.test })}>切换状态</button>
//       </div>
//     );
//   }
// }

// class TestFoo extends React.Component {
//   constructor(props) {
//     super(props);
//
//     function* getGenerator() {
//       yield 'foo';
//       return 'bar';
//     }
//
//     const generator = getGenerator();
//     while (!generator.next().done) {
//       console.log(generator.next());
//     }
//   }
//
//   render() {
//     return (
//       <div className="testFoo">
//         Test Foo
//       </div>
//     );
//   }
// }

class TestFoo extends React.Component {
  constructor(props) {
    super(props);

    function* getGenerator() {
      yield 'foo';
      return 'bar';
    }

    const generator = getGenerator();
    while (!generator.next().done) {
      console.log(generator.next());
    }
  }

  componentDidCatch(error, info) {
    console.log('--------> outer componentDidCatch', error, info);
    console.log(`----------> outer ${typeof error} ${typeof info}`);
  }

  render() {
    return (
      <div>
        <ErrorComponent />
        <div style={{ height: 100, width: 100, backgroundColor: 'lightblue' }} />
      </div>
    );
  }
}

class ErrorComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
    };
  }

  render() {
    if (this.state.articles.length) {
      return <div test-dom-attr="foo-bar" tabIndex='-1'>no articles</div>;
    }
    return <div testdoma-ttr="foo-bar">have articles</div>;
  }
}

export default TestFoo;
