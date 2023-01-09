import React from "react";
import { useNavigate } from "react-router-dom";

function Chat() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <button onClick={handleSignOut}>Sign Out</button>
      <div>Chat</div>
    </div>
  );
}

export default Chat;
