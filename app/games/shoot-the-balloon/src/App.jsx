import React, { useState, useEffect } from "react";
import GameBoard from "./components/GameBoard";

const COLORS = ["red", "blue", "green", "yellow", "purple", "orange"];

export default function App() {
  const [targetColor, setTargetColor] = useState("");
  const [score, setScore] = useState(0);
  const [successfulShots, setSuccessfulShots] = useState(0);
  const [unsuccessfulShots, setUnsuccessfulShots] = useState(0);
  const [message, setMessage] = useState("");
  const [round, setRound] = useState(1);

  const setNewTarget = () => {
    const newColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    setTargetColor(newColor);
  };

  useEffect(() => {
    setNewTarget();
  }, []);

  const handleShoot = (color) => {
    if (color === targetColor) {
      setScore((prev) => prev + 1);
      setSuccessfulShots((prev) => prev + 1);
      setMessage(`🎯 Nice! You shot the ${color} balloon!`);
    } else {
      setScore((prev) => Math.max(0, prev - 1));
      setUnsuccessfulShots((prev) => prev + 1);
      setMessage(`❌ Missed! That was the ${color} balloon.`);
    }

    setRound((prev) => prev + 1);
    setNewTarget();
  };

  const resetGame = () => {
    setScore(0);
    setSuccessfulShots(0);
    setUnsuccessfulShots(0);
    setRound(1);
    setMessage("");
    setNewTarget();
  };

  return (
    <div className="app">
      <h1>🎈 Shoot the Flying Balloon 🎯</h1>

      <h2>
        Target: Shoot the <span style={{ color: targetColor }}>{targetColor}</span> balloon!
      </h2>

      <h3>Score: {score}</h3>
      <p>{message}</p>

      <GameBoard colors={COLORS} onShoot={handleShoot} />

      <div className="result">
        <h4>Attempts: {round - 1}</h4>
        <p>✅ Successful Shots: {successfulShots}</p>
        <p>❌ Unsuccessful Shots: {unsuccessfulShots}</p>
      </div>

      <button className="reset-btn" onClick={resetGame}>
        🔁 Reset Game
      </button>
    </div>
  );
}
