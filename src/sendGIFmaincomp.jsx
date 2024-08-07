import { useState } from "react";
import SendEmoji from "./SendEmoji";
import SendGif from "./SendGif";

const MainChatInterface = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (message.trim()) {
      setMessages([...messages, { type: "text", content: message }]);
      setMessage("");
    }
  };

  const handleEmojiSelect = (emoji) => {
    setMessage(message + emoji);
  };

  const handleGifSelect = (gifUrl) => {
    setMessages([...messages, { type: "gif", content: gifUrl }]);
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

export default MainChatInterface;
