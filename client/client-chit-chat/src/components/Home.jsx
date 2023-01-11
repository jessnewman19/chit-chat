import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Chat from "./Chat";

function Home() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleUsernameSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("username", username);
    navigate("/chat");
    console.log(username);
    return <Chat username={username} />;
  };

  return (
    <form onSubmit={handleUsernameSubmit} id="username-form">
      <h2>Sign in to Open Chat</h2>
      <label>Username</label>
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        name="username"
        id="username"
      ></input>
      <button>Sign In</button>
    </form>
  );
}

export default Home;
