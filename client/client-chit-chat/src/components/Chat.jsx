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
      <ChatBar />
      <ChatBody />
      <ChatFooter />
      <button onClick={handleSignOut} id="sign-out-button">
        Sign Out
      </button>
    </div>
  );
}
Chat.propTypes = {
  username: PropTypes.string,
};

export default Chat;
