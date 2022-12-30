import React from "react";
import { useState } from "react";

const Movie = ({
  title,
  poster_path,
  original_language,
  overview,
  vote_average,
  removeMovie,
  id,
}) => {
  const baseUrl = "https://image.tmdb.org/t/p/w185/";
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-movie">
      <img src={baseUrl + poster_path} alt={title} className="movie-img" />
      <div className="movie-txt">
        <h3>Name: {title}</h3>
        <p>Original language: {original_language}</p>
        <div className="overview">
          <p>
            Overview: {readMore ? overview : `${overview.substring(0, 100)}...`}
          </p>
          <button
            onClick={() => setReadMore(!readMore)}
            className="btn"
            id="overview-btn"
          >
            {readMore ? "Show less" : "Read more"}
          </button>
        </div>
        <p>Average rating: {vote_average}</p>
        <button onClick={() => removeMovie(id)} className="btn">
          Not Interested!
        </button>
      </div>
    </article>
  );
};

export default Movie;
