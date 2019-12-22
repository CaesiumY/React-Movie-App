import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export class Detail extends Component {
  render() {
    console.log(this.props);
    const { location } = this.props;
    if (location.state) {
      return (
        <div>
          {location.state.title}
          <br />
          {location.state.year}
        </div>
      );
    } else {
      return (
        <Redirect
          to={{
            pathname: "/"
          }}
        />
      );
    }
  }
}

export default Detail;
