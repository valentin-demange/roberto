"use client";

import React from "react";
import { MessagesList } from "@/components/MessagesList";
import { ActionsButton } from "@/components/ActionsButton";
import { VirtualKeyboard } from "@/components/VirtualKeyboard";
import { MessagesContextProvider } from "@/components/MessageContextProvider";
import styles from "./chat.module.css";

export default function ChatPage() {
  return (
    <MessagesContextProvider>
      <div className={`container ${styles.container}`}>
        <div className={styles.actionsButtonContainer}>
          <ActionsButton />
        </div>
        <div className={styles.messagesListContainer}>
          <MessagesList />
        </div>
        <div className="spacer" />
        <VirtualKeyboard />
      </div>
    </MessagesContextProvider>
  );
}
