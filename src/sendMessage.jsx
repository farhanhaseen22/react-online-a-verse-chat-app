import { useState } from "react";

function LoginSection({ onLogin }) {
  const [username, setUsername] = useState("");
  useWebSocket(WS_URL, {
    share: true,
    filter: () => false,
  });

  function logInUser() {
    if (!username.trim()) {
      return;
    }
    onLogin && onLogin(username); // Triggers sendJsonMessage in App
  }

  /* When content changes, we send the
  current content of the editor to the server. */
  const handleHtmlChange = (e) => {
    sendMessage({
      type: "contentchange",
      content: e.target.value,
    });
  };

  const sendMessage = () => {
    if (messageInput.trim() !== "") {
      const message = {
        text: messageInput,
        timestamp: new Date().toISOString(),
      };
      socket.send(JSON.stringify(message));
      setMessageInput("");
    }
  };

  return (
    <div></div>
    // <DefaultEditor value={html} onChange={handleHtmlChange} />
  );
}

export default LoginSection;
