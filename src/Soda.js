import React from "react";
import "./Soda.css";
import sodaGif from "./soda.gif";

function Soda() {
  return (
    <div className="soda-container">
      <h2 className="soda-title">Soda</h2>
      <div className="soda-gif">
        <img src={sodaGif} alt="Soda GIF" />
      </div>
    </div>
  );
}

export default Soda;
