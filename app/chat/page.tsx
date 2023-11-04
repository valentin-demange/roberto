"use client";

import React from "react";
import styles from "./chat.module.css";
import { useRouter } from "next/navigation";
import { WaitingMessage } from "@/components/WaitingMessage";

export default function Chat() {
  const router = useRouter();

  const reset = () => {
    localStorage.removeItem("animal_female");
    localStorage.removeItem("animal_male");
    router.push("/");
  };

  return (
    <div className="container">
      <div className="spacer" />
      <div>
        <WaitingMessage />
      </div>
      <div className="spacer" />
      <button className={`button ${styles.resetButton}`} onClick={reset}>
        {"Reset"}
      </button>
    </div>
  );
}
