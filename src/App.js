import React, { Component } from "react";
import axios from "axios";
import { MOVIE_API_KEY } from "./tokens.json";

export default class App extends Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovieData = async () => {
    const {
      data: {
        movieListResult: { movieList }
      }
    } = await axios.get(
      `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${MOVIE_API_KEY}`
    );
    console.log(movieList);
    this.setState({ movies: movieList });
  };

  componentDidMount() {
    this.getMovieData();
    this.setState({ isLoading: false });
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        <div>{isLoading ? "Loading..." : "We are ready"}</div>
        <div>
          {movies.map(movie => (
            <p>{movie.movieNm}</p>
          ))}
        </div>
      </div>
    );
  }
}
