"use client";

import React from "react";
import styles from "./chat.module.css";
import { useRouter } from "next/navigation";


export default function Chat() {
  const router = useRouter();

  const reset = () => {
    localStorage.removeItem('animal_female');
    localStorage.removeItem('animal_male');
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.spacer} />
        <button className={styles.card} onClick={reset}>
          {"Reset"}
        </button>
      <div className={styles.spacer} />
    </div>
  );
}
