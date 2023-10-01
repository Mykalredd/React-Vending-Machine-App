import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Snack from "./Snack";
import Soda from "./Soda";
import Candy from "./Candy";
import NavBar from "./NavBar";

function App() {
  /*Used a function to define my App component*/
  return (
    <div className="App">
      {/* Used a class attributed so I can add styling later */}
      <BrowserRouter>
        {/* A react router component, sets up my routing options */}
        <NavBar />
        <Routes>
          {/* These sets up my routes */}
          <Route path="/snack" element={<Snack />} />
          <Route path="/soda" element={<Soda />} />
          <Route path="/candy" element={<Candy />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
