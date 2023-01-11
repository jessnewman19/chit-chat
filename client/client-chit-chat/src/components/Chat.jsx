import React from "react";
import PropTypes from "prop-types";
import ChatBar from "./ChatBar";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import ChatHeader from "./ChatHeader";

function Chat() {
  return (
    <div id="chat-container">
      <ChatBar />
      <ChatBody />
      <ChatFooter />
      <ChatHeader />
    </div>
  );
}
Chat.propTypes = {
  username: PropTypes.string,
};

export default Chat;
