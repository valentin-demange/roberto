"use client";

import React, { useEffect, useState } from "react";
import { MessagesList } from "@/components/MessagesList";
import { ActionsButton } from "@/components/ActionsButton";
import { VirtualKeyboard } from "@/components/VirtualKeyboard";
import {
  MessagesContextProvider,
  TMessage,
} from "@/components/MessageContextProvider";
import styles from "./chat.module.css";

export default function ChatPage() {

  const [messagesListInit, setMessagesListInit] = useState<TMessage[] | null>(null);

  useEffect(() => {
    const storedMessages = localStorage.getItem("messages");
    if (storedMessages) {
      setMessagesListInit(JSON.parse(storedMessages));
    }
    else {
      setMessagesListInit([]);
    }
  }, []);

  return (
    <>
      {messagesListInit !== null && (
        <MessagesContextProvider messagesListInit={messagesListInit}>
          <div className={`container ${styles.container}`}>
            <div className={styles.actionsButtonContainer}>
              <ActionsButton />
            </div>
            <div className={styles.messagesListContainer}>
              <MessagesList />
            </div>
            <VirtualKeyboard />
          </div>
        </MessagesContextProvider>
      )}
    </>
  );
}
