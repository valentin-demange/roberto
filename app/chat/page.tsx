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
      <div className="container">
        <div className={styles.actionsButtonContainer}>
          <ActionsButton />
        </div>
        <MessagesList />
        <div className="spacer" />
        <VirtualKeyboard />
      </div>
    </MessagesContextProvider>
  );
}
