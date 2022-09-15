import React, { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      params: "1"
    }
  }
  componentDidMount() {
    console.log(this.props.match);
    let params = this.props.match.params.params;
    this.setState({ params: params });
  }
  render() {
    return (
      <div>
        <div>{this.state.params}</div>
      </div>
    )
  }
}
// function App(){
//   const params = useParams();
//   console.log(params);
//   return (
//     <div>
//       <div>123</div>
//     </div>
//   )
// }

export default App;
