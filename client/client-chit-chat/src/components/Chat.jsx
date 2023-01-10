import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import ChatBar from "./ChatBar";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";

function Chat({ username }) {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.clear();
    navigate("/");
  };

  console.log(username);

  return (
    <div id="chat-container">
      <button onClick={handleSignOut}>Sign Out</button>
      <ChatBar username={username} />
      <ChatBody />
      <ChatFooter />
    </div>
  );
}

Chat.propTypes = {
  username: PropTypes.string,
};

export default Chat;
