import React from "react";
import { useState, useEffect } from "react";
import Movies from "./Movies";
import Loading from "./Loading";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const removeMovie = (id) => {
    const newMovies = movies.filter((item) => item.id !== id);
    setMovies(newMovies);
  };
  const fetchMovieData = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/popular?api_key=fb515d4b4ebf2374fb5273c520584108&language=en-US&page=1";
    setLoading(true);
    try {
      const response = await fetch(url);
      const movieJson = await response.json();
      setLoading(false);
      const movieList = movieJson["results"];
      let shuffled = movieList
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
      const final = shuffled.slice(0, 8);
      setMovies(final);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMovieData();
  }, []);

  if (loading) {
    return (
      <div className="container">
        <Loading />
      </div>
    );
  }
  if (movies.length === 0) {
    return (
      <div className="container">
        <h1 className="title">No more movies left</h1>
        <button onClick={fetchMovieData} className="btn">
          Refresh
        </button>
      </div>
    );
  }

  return (
    <main>
      <Movies movies={movies} removeMovie={removeMovie} />
    </main>
  );
}

export default App;
