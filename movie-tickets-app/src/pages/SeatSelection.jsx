import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import Seats from "../components/Seats";
import { IconContext } from "react-icons";

{
  /* <IconContext.Provider value={{ className: "shared-class", size: 70 }}>
  <MdAirlineSeatReclineNormal />
</IconContext.Provider>; */
}

function CinemaHall() {
  // Number of rows and seats per row
  const numRows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  // const numRows = rows.length;
  const seatsPerRow = 20;

  // Initialize seat selection state
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Function to handle seat selection
  const handleSeatClick = (row, seat) => {
    const seatInfo = `${row}${seat}`;
    if (selectedSeats.includes(seatInfo)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seatInfo));
    } else {
      setSelectedSeats([...selectedSeats, seatInfo]);
    }
  };

  // const handleClick = (e) => {};
  // Generate seat grid
  const seatGrid = [];
  for (let row = 0; row < numRows.length; row++) {
    const rowSeats = [];
    for (let seat = 0; seat <= seatsPerRow; seat++) {
      const seatInfo = `${numRows[row]}${seat}`;
      const isSelected = selectedSeats.includes(seatInfo);
      rowSeats.push(
        <div
          key={seatInfo}
          className={`seat ${isSelected ? "selected text-success" : ""}`}
          onClick={() => handleSeatClick(numRows[row], seat)}
          style={{ border: "1px solid white" }}
        >
          <Seats value={seatInfo} />
        </div>
      );
    }
    seatGrid.push(
      <div key={`row-${row}`} style={{ display: "flex " }}>
        {rowSeats}
      </div>
    );
  }
  return (
    <>
      <div className="container mx-3 my-4" style={{ display: "flex" }}>
        <ul className="list-group" width>
          <h2>Available Seats</h2>
          <div className="container">{seatGrid.reverse()}</div>
          <div
            className="container text-bg-info text-center m-4"
            style={{
              borderRadius: "50% / 150px",
              padding: "15px",
              textAlign: "center",
            }}
          >
            Screen Here
          </div>
        </ul>

        <div className="container text-end">
          <h2>Selected Seats</h2>
          <div className="" id="selected-seats">
            {selectedSeats.map((seat) => (
              <div key={seat} className="seat selected text-center">
                {seat}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CinemaHall;
