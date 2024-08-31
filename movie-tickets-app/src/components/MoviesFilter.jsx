import React from "react";

const MoviesFilter = () => {
  return (
    <>
      <div>MoviesFilter</div>
      <div>
        Clothing: &nbsp;&nbsp;
        <input type="radio" name="clothing" />
        &nbsp;Men's &nbsp;
        <input type="radio" name="clothing" />
        &nbsp;Women's &nbsp;
      </div>
      <div>
        Price: &nbsp;&nbsp;
        <input type="radio" name="price" />
        &nbsp;Min &nbsp;
        <input type="radio" />
        &nbsp;Max &nbsp;
      </div>
    </>
  );
};

export default MoviesFilter;
