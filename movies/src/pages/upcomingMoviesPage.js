import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getMovies, getUpcomingMovies } from "../api/tmdb-api";


const UpcomingMoviesPage = (props) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getUpcomingMovies().then(movies => {
          setMovies(movies);
        });
      }, []);

  return (
    <PageTemplate
      title='Upcoming Movies'
      movies={movies}
    />
  );
};
export default UpcomingMoviesPage;