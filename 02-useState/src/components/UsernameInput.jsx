// src/components/UsernameInput.jsx

import { useState } from "react";

function UsernameInput() {
  const [username, setUsername] = useState("");

  return (
    <div>
      <h2>Username Input</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <p>Username: {username.toLowerCase()}</p>
    </div>
  );
}

export default UsernameInput;
