import React from "react";
import styles from "./WaitingMessage.module.css";

export const WaitingMessage = () => {
  return (
    <div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
    </div>
  );
};
