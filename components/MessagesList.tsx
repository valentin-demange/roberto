import { useContext, useEffect, useState } from "react";
import { MessagesContext } from "./MessageContextProvider";
import styles from "./MessagesList.module.css";
import { Message } from "./Message";
import { WaitingMessage } from "./WaitingMessage";

export const MessagesList = () => {
  const { messages, addMessage, contactRoberto, setContactRoberto } =
    useContext(MessagesContext);
  const reversedMessages = messages.slice().reverse();
  const [isRobertoAnswering, setIsRobertoAnswering] = useState<boolean>(false);

  const getRobertoAnswer = async () => {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return "Bonjour, c'est Roberto";
  };

  useEffect(() => {
    let isCancelled = false; // Flag to determine if the effect has been cancelled.

    const askRoberto = async () => {
      // After 1 seconds, Roberto starts to answer
      await new Promise((resolve) => setTimeout(resolve, 1500));
      if (isCancelled) return; // Check if the effect has been cancelled.
      setIsRobertoAnswering(true);
      console.log("Roberto is answering");
      const results = await Promise.all([
        getRobertoAnswer(),
        new Promise((resolve) =>
          setTimeout(resolve, 1000 + Math.random() * 2000)
        ),
      ]);
      if (isCancelled) return; // Check again after the timeout.
      addMessage({ text: results[0], author: "roberto" });
      console.log("Roberto answers!");
      setContactRoberto(false);
      setIsRobertoAnswering(false);
    };

    if (contactRoberto) {
      console.log("trying to contact Roberto");
      askRoberto();
    }

    return () => {
      isCancelled = true; // Set the flag to true when the component unmounts or the effect re-runs.
      setIsRobertoAnswering(false);
    };
  }, [contactRoberto, addMessage, setContactRoberto, setIsRobertoAnswering]);

  return (
    <div className={styles.container}>
      <div className={styles.messagesListContainer}>
        {isRobertoAnswering && <WaitingMessage />}
        {reversedMessages.map((message, index) => (
          <Message key={index} author={message.author}>
            {message.text}
          </Message>
        ))}
      </div>
    </div>
  );
};
