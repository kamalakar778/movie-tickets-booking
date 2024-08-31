import React, { useContext, useEffect, useState } from "react";
import "./data.json";
import { MoviesContext } from "./Context";
import MovieDetails from "../pages/MovieDetails";
import MoviesFilter from "./MoviesFilter";
import MovieCard from "../pages/MovieCard";

const Movies = () => {
  const [state, dispatch] = useContext(MoviesContext);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-2">
            <MoviesFilter />
          </div>
          <hr />
          <div className="row">
            {state.movies.map((i) => (
              <div className="col-sm-3">
                <MovieCard value={i} />
              </div>
            ))}
          </div>
          {/* <div className="col-sm">One of three columns</div> */}
        </div>
      </div>
    </>
  );
};

export default Movies;
