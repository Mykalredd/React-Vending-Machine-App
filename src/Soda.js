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
// This is a soda component that sets up source as a Gif image and class is used to style the soda section in my webpage.
export default Soda;
