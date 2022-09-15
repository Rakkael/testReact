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
    console.log("params -->", this.props);
  }
  render() {
    return (
      <div>{this.state.params}</div>
    )
  }
}

export default App;
