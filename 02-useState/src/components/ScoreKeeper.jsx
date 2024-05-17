// src/components/ScoreKeeper.jsx

import { useState } from "react";

function ScoreKeeper() {
  const [score, setScore] = useState(0);

  return (
    <div>
      <h1>Score Keeper</h1>
      <p>Score: {score}</p>
      <button
        onClick={() => {
          setScore(score + 5);
        }}
      >
        Increase by 5
      </button>
      <button
        onClick={() => {
          /* complete the missing code */
          setScore(score - 5);
        }}
      >
        Decrease by 5
      </button>
    </div>
  );
}

export default ScoreKeeper;
