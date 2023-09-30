import React from "react";
import "./Snack.css";
import snackGif from "./snack.gif";

function Snack() {
  return (
    <div className="snack-container">
      <h2 className="snack-title">Snack</h2>
      <div className="snack-gif">
        <img src={snackGif} alt="Snack GIF" />
      </div>
    </div>
  );
}

export default Snack;
