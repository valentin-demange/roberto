"use client";

import React from "react";
import { Chat } from "@/components/Chat";
import { ChatBottomBar } from "@/components/ChatBottomBar";

export default function ChatPage() {
  return (
    <div className="container">
      <div style={{ marginTop: "40px" }} />
      <Chat />
      <div className="spacer" />
      <ChatBottomBar />
    </div>
  );
}
