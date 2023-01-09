import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleUsernameSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("username", username);
    navigate("/chat");
  };

  return (
    <form onSubmit={handleUsernameSubmit}>
      <h2>Sign in to Open Chat</h2>
      <label>Username</label>
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        name="username"
        id="username"
        minLength={5}
      ></input>
      <button>Sign In</button>
    </form>
  );
}

export default Home;
