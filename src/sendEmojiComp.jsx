import { useState } from "react";

function LoginSection({ onLogin }) {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");

  // the URL to be used
  const url = new WebSocket("ws://localhost:3001");

  const handleHtmlChange = (e) => {
    // Handles all the content to be sent
    // sendMessage({
    //   type: "contentchange",
    //   content: e.target.value,
    // });
  };

  const sendMessage = () => {
    // where it connects with GIPHY API
    // and obtains emojis and GIFs
  };

  return (
    <div></div>
    // <DefaultEditor value={html} onChange={handleHtmlChange} />
  );
}

export default LoginSection;
