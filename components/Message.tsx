import { TMessage } from "./MessageContextProvider";
import styles from "./Message.module.css";

export const Message = ({ message }: { message: TMessage }) => {
  return (
    <div
      className={`${styles.message} ${
        message.author === "roberto"
          ? styles.messageRoberto
          : styles.messageAnneClaire
      }`}
    >
      {message.text}
    </div>
  );
};
