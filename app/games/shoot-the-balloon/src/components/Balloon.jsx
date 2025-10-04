import React from "react";
import "./Balloon.css";

export default function Balloon({ color, onClick }) {
  // Generate random positions & animation durations for each balloon
  const leftPosition = Math.random() * 80; // random horizontal start (0–80%)
  const animationDuration = 4 + Math.random() * 3; // 4–7 seconds flight time

  return (
    <div
      className="balloon"
      style={{
        backgroundColor: color,
        left: `${leftPosition}%`,
        animationDuration: `${animationDuration}s`,
      }}
      onClick={onClick}
    >
      🎈
    </div>
  );
}
