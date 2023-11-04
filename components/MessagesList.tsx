import { useContext } from "react";
import { MessagesContext } from "./MessageContextProvider";
import styles from "./MessagesList.module.css";
import { Message } from "./Message";

export const MessagesList = () => {
  const { messages } = useContext(MessagesContext);

  return (
    <div className={styles.container}>
      <div className={styles.messagesListContainer}>
        {messages.map((message, index) => (
          <Message message={message} key={index} />
        ))}
      </div>
    </div>
  );
};
