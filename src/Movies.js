import React from "react";
import Movie from "./Movie";

const Movies = ({ movies, removeMovie }) => {
  return (
    <div className="container">
      <h1 className="Title">The Movies</h1>
      <div className="inner">
        {movies.map((movie) => {
          return (
            <Movie key={movie.id} {...movie} removeMovie={removeMovie}></Movie>
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
