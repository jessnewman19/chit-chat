import React from "react";
import { useNavigate } from "react-router-dom";

function ChatHeader() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div id="chat-body-header">
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default ChatHeader;
