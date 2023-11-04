import { useContext } from "react";
import { MessagesContext } from "./MessageContextProvider";
import styles from "./MessagesList.module.css";
import { MessageRoberto } from "./MessageRoberto";

export const MessagesList = () => {
  const { messages } = useContext(MessagesContext);

  return (
    <div className={styles.messagesListContainer}>
      {messages.map((message) => (
        <>
          {message.author === "roberto" ? (
            <MessageRoberto message={message.text} />
          ) : (
            <MessageRoberto message={message.text} />
          )}
        </>
      ))}
    </div>
  );
};
