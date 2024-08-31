import React from "react";
import { Link, useNavigate  } from "react-router-dom";
import Home from "./Home";

const MovieCard = (props) => {
  const navigate = useNavigate();
  // const { id, title } = props.value.i;
  return (
    <>
      {/* <Link to={`https://freetestapi.com/api/v1/movies/${props.value.id}`} className="text-decoration-none"> */}
      <Link to={`/movie/${props.value.id}`} className="text-decoration-none">
        <div
          className="card my-4"
          key={props.value.id}
          style={{ height: "22rem", width: "18rem" }}
          // onClick={navigate(`https://freetestapi.com/api/v1/movies/:${props.value.id}`)}
        >
          <img
            className="mx-5 my-4"
            style={{ height: "160px", weight: "50px" }}
            src={props.value.poster}
            alt="Movie Image"
          />
          <div className="card-body">
            <h5 className="card-title">{props.value.title}</h5>
            <div className="row">
              <p className="col-sm-3">{props.value.rating}/10</p>
              <p className="col">{props.value.genre}</p>
              <p className="col">{props.value.year}</p>
            </div>
            <div className="row">
              <p className="col">{props.value.language}</p>
              <p className="col">{props.value.country}</p>
            </div>
          </div>
        </div>
      </Link>

      {/* <div className="container col-md-2"></div>
      <div className="card" key={props.value.id}>
        <Link to={`/moviecard/:${props.value.id}`}>
          <img src={props.value.image} height="50px" weight="50px" />
          {props.value.id} <br></br>
          {props.value.title}
        </Link>
      </div> */}
    </>
  );
};

export default MovieCard;
