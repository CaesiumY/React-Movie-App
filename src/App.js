import React, { Component } from "react";

export default class App extends Component {
  state = {
    isLoading: true,
    movies: []
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div>
        <div>{isLoading ? "Loading..." : "We are ready"}</div>
      </div>
    );
  }
}
