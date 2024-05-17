// src/components/ShowHideText.jsx

import { useState } from "react";

function ShowHideText() {
  const [showText, setShowText] = useState(false);

  return (
    <div>
      <h2>Show/Hide Text</h2>
      <button
        onClick={() => {
          setShowText(!showText);
        }}
      >
        Show/Hide Text
      </button>
      {showText && <p>This is a toggled text!</p>}
    </div>
  );
}

export default ShowHideText;
