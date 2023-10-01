import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  // This component "NavBar" has the element "nav" with class attribute.
  // The nav will be the container for my nav links.
  // The link component will make my links clickable.
  return (
    <nav className="NavBar">
      <Link to="/">Home</Link>
      <Link to="/snack">Snack</Link>
      <Link to="/soda">Soda</Link>
      <Link to="/candy">Candy</Link>
    </nav>
  );
}

export default NavBar;
