import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import "boxicons";
import fetchMovie from "./fetchMovie";
import "./details.css";

const Details = () => {
  const { id } = useParams();
  const results = useQuery(["details", id], fetchMovie);
  const movie = results.data;

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }

  return (
    <div className="movie_card" id="bright">
      <div className="info_section">
        <div className="movie_header">
          <img className="locandina" src={movie.Poster} />
          <h1>{movie.Title}</h1>
          <h4>
            {movie.Year}, {movie.Director}
          </h4>
          <span className="minutes">{movie.Runtime}</span>
          <p className="type">{movie.Genre}</p>
        </div>
        <div className="movie_desc">
          <p className="text">{movie.Plot}</p>
        </div>
        <div className="actors">
          <h5>Actors: </h5>
          <p>{movie.Actors}</p>
        </div>
        <div className="writer">
          <h5>Writer: </h5>
          <p>{movie.Writer}</p>
        </div>
        <div className="awards">
          <h5>Awards: </h5>
          <p>{movie.Awards}</p>
        </div>
        <div className="rating">
          <box-icon type="regular" name="heart"></box-icon>
          {movie.Ratings[1].Value}
        </div>
      </div>
      <div
        className="blur_back bright_back"
        style={{ backgroundImage: `url("${movie.Poster}")` }}
      ></div>
    </div>
  );
};

export default Details;
