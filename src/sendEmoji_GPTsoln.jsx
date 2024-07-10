import React, { useState } from "react";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

const SendEmoji = ({ onEmojiSelect }) => {
  const [isPickerVisible, setPickerVisible] = useState(false);

  const handleEmojiSelect = (emoji) => {
    onEmojiSelect(emoji.native);
    setPickerVisible(false);
  };

  return (
    <div style={{ position: "relative" }}>
      <button onClick={() => setPickerVisible(!isPickerVisible)}>😊</button>
      {isPickerVisible && (
        <div style={{ position: "absolute", bottom: "50px" }}>
          <Picker onSelect={handleEmojiSelect} />
        </div>
      )}
    </div>
  );
};

const SendEmoji = ({ onEmojiSelect }) => {
  const [isPickerVisible, setPickerVisible] = useState(false);

  const handleEmojiSelect = (emoji) => {
    onEmojiSelect(emoji.native);
    setPickerVisible(false);
  };

  return (
    <div style={{ position: "relative" }}>
      <button onClick={() => setPickerVisible(!isPickerVisible)}>😊</button>
      {isPickerVisible && (
        <div style={{ position: "absolute", bottom: "50px" }}>
          <Picker onSelect={handleEmojiSelect} />
        </div>
      )}
    </div>
  );
};

export default SendEmoji;
