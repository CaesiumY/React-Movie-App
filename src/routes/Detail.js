import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "../css/Detail.css";

export class Detail extends Component {
  render() {
    console.log(this.props);
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="detail__container">
          <img
            className="detail__img"
            src={location.state.poster}
            alt={location.state.title}
            title={location.state.title}
          />
          <div className="detail__info">
            <h3 className="detail__title">{location.state.title}</h3>
            <h5 className="detail__year">( {location.state.year} )</h5>
            <ul className="detail__genres">
              {location.state.genres.map((genre, index) => (
                <li className="genres__genre" key={index}>
                  {genre}
                </li>
              ))}
            </ul>
            <p className="detail__summary">{location.state.summary}</p>
          </div>
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
