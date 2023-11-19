"use client";

import React from "react";
import styles from "./ResetButton.module.css";
import { useRouter } from "next/navigation";

export const ResetButton = () => {
  const router = useRouter();

  const reset = () => {
    localStorage.removeItem("animal_female");
    localStorage.removeItem("animal_male");
    localStorage.removeItem("messages");
    router.push("/");
  };

  return (
    <button className={`button ${styles.resetButton}`} onClick={reset}>
      <div className={styles.resetSign}>&#8634;</div>
      <div>Reset</div>
    </button>
  );
};
