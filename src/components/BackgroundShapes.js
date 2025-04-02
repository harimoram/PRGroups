import React, { useEffect, useState } from "react";
import "../styles/BackgroundShapes.css";

const generateCircles = (num) => {
  const circles = [];
  for (let i = 0; i < num; i++) {
    const size = Math.random() * (150 - 50) + 50; // Random size between 50px - 150px
    const x = Math.random() * 100; // Random horizontal position (0-100%)
    const y = Math.random() * 100; // Random vertical position (0-100%)
    const duration = Math.random() * (15 - 5) + 5; // Random animation duration (5s-15s)

    circles.push({
      id: i,
      size,
      x,
      y,
      duration,
      gradientId: `grad${i}`,
      color1: `hsl(${Math.random() * 360}, 80%, 70%)`, // Random HSL color
      color2: `hsl(${Math.random() * 360}, 80%, 50%)`,
    });
  }
  return circles;
};

const BackgroundShapes = () => {
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    setCircles(generateCircles(10)); // Generate 10 random circles
  }, []);

  return (
    <div className="background-container">
      {circles.map((circle) => (
        <svg
          key={circle.id}
          className="floating-circle"
          style={{
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            top: `${circle.y}%`,
            left: `${circle.x}%`,
            animationDuration: `${circle.duration}s`,
          }}
          viewBox="0 0 200 200"
        >
          <defs>
            <radialGradient id={circle.gradientId} cx="50%" cy="50%" r="50%">
              <stop offset="0%">
                <animate attributeName="stop-color" values={`${circle.color1}; ${circle.color2}; ${circle.color1}`} dur="5s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%">
                <animate attributeName="stop-color" values={`${circle.color2}; ${circle.color1}; ${circle.color2}`} dur="5s" repeatCount="indefinite" />
              </stop>
            </radialGradient>
          </defs>
          <circle cx="100" cy="100" r="100" fill={`url(#${circle.gradientId})`} />
        </svg>
      ))}
    </div>
  );
};

export default BackgroundShapes;
