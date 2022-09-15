import React, { Component } from 'react';

// function App() {

//   return (
//     <div className="App">

//     </div>
//   );
// }
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      params: "1"
    }
  }
  componentDidMount() {
    // let params = this.props;
    // this.setState({ params: params });
  }
  render() {
    console.log("params -->", this.props);
    return (
      <div>
        <div>我是APP</div>
        {/* <div>{this.state.params}</div> */}
      </div>
    )
  }
}

export default App;
