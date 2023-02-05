import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./cards";

const MovieList = (props) => {
  return (
    <div className="row">
      {props.movies.map((movie) => (
        <Card img={movie.Poster} key={movie.imdbID} name={movie.imdbID} />
      ))}
    </div>
  );
};

export default MovieList;
