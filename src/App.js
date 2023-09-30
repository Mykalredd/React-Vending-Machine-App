import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Snack from "./Snack";
import Soda from "./Soda";
import Candy from "./Candy";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
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
