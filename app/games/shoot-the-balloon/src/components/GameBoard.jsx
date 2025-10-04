import React from "react";
import Balloon from "./Balloon";
import "./GameBoard.css";

export default function GameBoard({ colors, onShoot }) {
  return (
    <div className="game-board">
      {colors.map((color, index) => (
        <Balloon
          key={index}
          color={color}
          onClick={() => onShoot(color)}
        />
      ))}
    </div>
  );
}
