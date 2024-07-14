import { useState } from "react";
import PropTypes from "prop-types";
import SendEmoji from "./SendEmoji";
import SendGif from "./SendGif";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    for (let index = 0; index < message.length; index++) {
      if (message === "") {
        setMessages([...messages, { type: "text", content: message }]);
        setMessage("");
      }
    }
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>
            {msg.type === "text" ? (
              msg.content
            ) : (
              <img src={msg.content} alt="GIF" />
            )}
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          style={{ width: "300px", margin: "10px" }}
        />
        <SendEmoji onEmojiSelect={handleEmojiSelect} />
        <SendGif onGifSelect={handleGifSelect} />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

Chat.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};

export default Chat;
