import React, { Component } from "react";
import axios from "axios";

import Movie from "./Movie";

export default class App extends Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovieData = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    console.log(movies);
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovieData();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        <div>{isLoading ? "Loading..." : movies.map( movie => (
          <Movie key={movie.id} id={movie.id} title={movie.title} year={movie.year} summary={movie.summary} poster={movie.medium_cover_image} />
        ))}</div>
      </div>
    );
  }
}
