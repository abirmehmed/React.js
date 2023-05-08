import React, { useState, useEffect } from "react";
import "./App.css";

// A function to generate a random number between min and max
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// A function to generate a random level of contribution
function getRandomLevel() {
  let level = getRandom(0, 100);
  if (level < 50) {
    return "level-0";
  } else if (level < 70) {
    return "level-1";
  } else if (level < 85) {
    return "level-2";
  } else if (level < 95) {
    return "level-3";
  } else {
    return "level-4";
  }
}

// A component to render a single cell
function Cell() {
  // A state to store the level of contribution
  const [level, setLevel] = useState("level-0");

  // A useEffect hook to generate a random level on mount
  useEffect(() => {
    setLevel(getRandomLevel());
  }, []);

  // Return the cell with the corresponding level class
  return <div className={`cell ${level}`}></div>;
}

// A component to render the grid of cells
function Grid() {
  // A state to store the array of cells
  const [cells, setCells] = useState([]);

  // A useEffect hook to create the cells on mount
  useEffect(() => {
    let temp = [];
    for (let i = 0; i < 371; i++) {
      temp.push(<Cell key={i} />);
    }
    setCells(temp);
  }, []);

  // Return the grid with the cells
  return <div className="grid">{cells}</div>;
}

// The main app component
function App() {
  // Return the grid component
  return <Grid />;
}

export default App;
