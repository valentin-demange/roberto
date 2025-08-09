import { useContext, useEffect, useState } from "react";
import { MessagesContext } from "./MessageContextProvider";
import styles from "./MessagesList.module.css";
import { Message } from "./Message";
import { WaitingMessage } from "./WaitingMessage";
import { askRoberto } from "@/utils/askRoberto";

export const MessagesList = () => {
  const { messages, addMessage, contactRoberto, setContactRoberto } =
    useContext(MessagesContext);
  const reversedMessages = messages.slice().reverse();
  const [isRobertoAnswering, setIsRobertoAnswering] = useState<boolean>(false);

  // const askRoberto = async () => {
  //   await new Promise((resolve) => setTimeout(resolve, 100));
  //   return "Bonjour, c'est Roberto";
  // };

  useEffect(() => {
    let isCancelled = false; // Flag to determine if the effect has been cancelled.

    const getRobertoAnswer = async () => {
      // After 1 seconds, Roberto starts to answer
      await new Promise((resolve) => setTimeout(resolve, 2000));
      if (isCancelled) return; // Check if the effect has been cancelled.
      setIsRobertoAnswering(true);
      console.log("Roberto is answering");
      try {
        const results = await Promise.all([
          askRoberto(messages),
          console.log("openAi answered!"),
          new Promise((resolve) =>
            setTimeout(resolve, 0 * Math.random() * 1000)
          ),
        ]);
        if (isCancelled) return; // Check again after the timeout.
        if (results[0] !== null) {
          addMessage({ text: results[0], author: "roberto" });
          console.log("Roberto answers!");
          setContactRoberto(false);
          setIsRobertoAnswering(false);
        }
      } catch (error: any) {
        console.error("Failed to get Roberto's response:", error);
        setIsRobertoAnswering(false);
        setContactRoberto(false);
        
        addMessage({ 
          text: "Oupsi problème technique, peux tu me redonner ta réponse ?", 
          author: "roberto" 
        });
      }
    };

    if (contactRoberto) {
      console.log("trying to contact Roberto");
      getRobertoAnswer();
    }

    return () => {
      isCancelled = true; // Set the flag to true when the component unmounts or the effect re-runs.
      setIsRobertoAnswering(false);
    };
  }, [contactRoberto, addMessage, setContactRoberto, setIsRobertoAnswering]);

  // console.log("key:", process.env.NEXT_OPENAI_API_KEY);
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
