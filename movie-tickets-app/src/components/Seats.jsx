import React from "react";

const Seats = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={{
        border: "4px solid",
        height: "40px",
        width: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="container"
    >
      {props.value}
    </div>
  );
};

export default Seats;
