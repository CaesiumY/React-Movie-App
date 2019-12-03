import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor!");
  }

  componentDidMount() {
    console.log("Component Mounted!");
  }

  componentDidUpdate() {
    console.log("Component Updated!");
  }

  state = {
    count: 0
  };

  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };

  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  };

  render() {
    console.log("Component Rendered!");
    return (
      <div>
        <h1>My number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}
