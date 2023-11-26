import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getMovies, getUpcomingMovies } from "../api/tmdb-api";


const UpcomingMoviesPage = (props) => {
      const toDo = () => true;
  // Get movies from local storage.
//   const upcomingMovies = JSON.parse(localStorage.getItem("favorites")); 
    const [movies, setMovies] = useState([]);
    // const [upcoming] = useState([]);

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