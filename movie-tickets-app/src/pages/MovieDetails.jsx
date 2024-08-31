import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MoviesContext } from "../components/Context";

const MovieDetails = () => {
  const { id } = useParams(); // Extract ID from URL parameters
  const [state, dispatch] = useContext(MoviesContext);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://freetestapi.com/api/v1/movies/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
        console.log(data);
      });
  }, [id]); // Dependency array includes id

  if (!movie) {
    return <div>Loading...</div>; // Add a loading state
  }

  return (
    <div className="row">
      <div className="col">
        <img src={movie.poster} alt={movie.title} />
      </div>
      <div className="col">
        <label>Actors</label>
        <p className="card-text">{movie.actors}</p>
        <label>Awards</label>
        <p className="card-text">{movie.awards}</p>
        <label>Box Office</label>
        <p className="card-text">{movie.boxoffice}</p>
        <label>Country</label>
        <p className="card-text">{movie.country}</p>
        <label>Director</label>
        <p className="card-text">{movie.director}</p>
        <label>Genre</label>
        <p className="card-text">{movie.genre}</p>
        <label>Language</label>
        <p className="card-text">{movie.language}</p>
        <label>Plot</label>
        <p className="card-text">{movie.plot}</p>
        <label>Poster</label>
        <p className="card-text">{movie.poster}</p>
        <label>Production</label>
        <p className="card-text">{movie.production}</p>
        <label>Rating</label>
        <p className="card-text">{movie.rating}/10</p>
        <label>Runtime</label>
        <p className="card-text">{movie.runtime}</p>
        <label>Title</label>
        <p className="card-text">{movie.title}</p>
        <div>
        <label>Trailer</label>
      {/* <video width="320" height="240" controls>
        <source src="movie.mp4" type="video/mp4" />
        <source src="movie.ogg" type="video/ogg" />
        Your browser does not support the video tag.
      </video> */}
        <p className="card-text">{movie.trailer}</p>
    </div>
        <label>Website</label>
        <p className="card-text">{movie.website}</p>
        <label>Year</label>
        <p className="card-text">{movie.year}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
