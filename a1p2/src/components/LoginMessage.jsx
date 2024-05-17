// src/components/LoginMessage.jsx

import React from "react";

function LoginMessage({ isLoggedIn }) {
  return <div>
    {isLoggedIn ? <p>Wellcome back</p> : <p>Please login</p>}
  </div>;
}

export default LoginMessage;
