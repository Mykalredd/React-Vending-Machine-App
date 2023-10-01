import React from "react";
import "./Candy.css"; 
import candyGif from "./candy.gif"; 

function Candy() {
  return (
    <div className="candy-container">
      <h2 className="candy-title">Candy</h2>
      <div className="candy-gif">
        <img src={candyGif} alt="Candy GIF" />
      </div>
    </div>
  );
}
// This is a candy component that sets up source as a Gif image and class is used to style the candy section in my webpage.
export default Candy;