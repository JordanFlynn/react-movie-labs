import React from "react";
import Header from "../components/headerMovieList";
import FilterCard from "../components/filterMoviesCard";
import MovieList from "../components/movieList";
import Grid from "@mui/material/Grid";

const MovieListPage = (props) => {
  const movies = props.movies;

  return (
    <Grid container sx={{ padding: "20px" }}>
      <Grid item xs={12}>
        <Header title={"Home Page"} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard />
        </Grid>
        <MovieList movies={movies}></MovieList>
      </Grid>
    </Grid>
  );
};
export default MovieListPage;
Also, create the file src/components/movieList/index.js (referenced by the above code) and add this code:

import React from "react";
import Movie from "../movieCard/";
import Grid from "@mui/material/Grid";

const MovieList = (props) => {
  let movieCards = props.movies.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Movie key={m.id} movie={m} />
    </Grid>
  ));
  return movieCards;
};

export default MovieList;