import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  // This is a component called home which with allow me to set-up my homepage with text and later styling.
  return (
    <div className="home-container">
      <h2>Try Mike's Vending Machine</h2>
      <ul>
        <li>
          <Link to="/snack">Got the Munchies?</Link>
        </li>
        <li>
          <Link to="/soda">Feeling Thristy?</Link>
        </li>
        <li>
          <Link to="/candy">Craving Sweets?</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
