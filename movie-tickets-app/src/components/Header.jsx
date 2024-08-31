import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <Navbar />
      <div className="jumbotron text-center">
        <h1 className="display-4">GET MOVIE TICKETS</h1>
        <p className="lead">
          Buy movie tickets in advance, find movie times watch trailers, read
          movie reviews and musch more
        </p>
        <hr className="my-4" />
        {/* <a className="btn btn-primary btn-lg" href="#" role="button">
          Start Reading
        </a> */}
      </div>
    </>
  );
};

export default Header;
