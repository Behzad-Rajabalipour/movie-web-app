import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Movies from "./components/Movies";

class App1 extends Component {
  render() {
    return (
      <div>
        {/* Navigation bar component */}
        <Navbar />
        {/* Horizontal line as a visual separator */}
        <hr /> 
        {/* Routes for different components */}
        <Routes>
          {/* Route for the Home component */}
          <Route path="/" element={<Home />} />
          {/* Route for the AboutUs component */}
          <Route path="/about-us" element={<AboutUs />} />
          {/* Route for the Movies component */}
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </div>
    );
  }
}

export default App1;
