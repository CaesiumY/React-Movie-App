import React from "react";
import PropTypes from "prop-types";
import "../css/Movie.css";

let MORE = false;

function Movie({ id, title, year, summary, poster, genres }) {
  return (
    <div className="movie">
      <img className="movie__img" src={poster} alt={title} title={title} />
      <div className="movie__info">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">( {year} )</h5>
        <ul className="movie__genres">
          {genres.map((genre, index) => (
            <li className="genres__genre" key={index}>
              {genre}
            </li>
          ))}
        </ul>
        {MORE ? (
          <p className="movie__summary">{summary}</p>
        ) : (
          <p className="movie__summary">{summary.slice(0, 180)}...</p>
        )}

        <button className="movie__moreBtn" onClick={() => (MORE = true)}>
          more
        </button>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
