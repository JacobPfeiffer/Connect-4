import React from "react";
import "./App.css";
import "./Circle";
import Board from "./Board";

function App() {
  return (
    <div>
      <h1 className="header">Connect 4</h1>
      <div className="rectangle">
        <Board />
      </div>
    </div>
  );
}

export default App;
