import React, { useContext, useState } from "react";
import styles from "./VirtualKeyboard.module.css";
import { MessagesContext } from "./MessageContextProvider";

export const VirtualKeyboard = () => {
    const { addMessage } = useContext(MessagesContext);
    const [text, setText] = useState("");
  
    const sendMessage = () => {
      if (text.trim()) {
        addMessage({ text, author: "anne-claire" });
        setText("");
      }
    };
  
    const handleTextChange = (e:any) => {
      setText(e.target.value);
    };
  
    const handleKeyDown = (e:any) => {
      if (e.key === 'Enter') {
        sendMessage();
      }
    };
  
    return (
      <div className={styles.virtualKeyboardContainer}>
        <input
          className={styles.virtualKeyboardInput}
          type="text"
          placeholder="Tapez votre message..."
          value={text}
          onChange={handleTextChange}
          onKeyDown={handleKeyDown} // Added onKeyDown event listener
        ></input>
        <button className={styles.sendMessageButton} onClick={sendMessage}>➤</button>
      </div>
    );
  };
  