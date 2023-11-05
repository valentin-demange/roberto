import { TMessage } from "./MessageContextProvider";
import styles from "./Message.module.css";
import { ReactNode } from "react";

export const Message = ({ children, author }: { children: ReactNode, author: TMessage["author"] }) => {
  return (
    <div
      className={`${styles.message} ${
        author === "roberto"
          ? styles.messageRoberto
          : styles.messageAnneClaire
      }`}
    >
      {children}
    </div>
  );
};
