import React, { createContext, useState, FC, ReactNode } from "react";

export type TMessage = {
  text: string;
  author: "anne-claire" | "roberto";
};

// Create the context with a default value
export const MessagesContext = createContext({
  messages: [] as TMessage[],
  addMessage: (message: TMessage) => {},
  contactRoberto: false,
  setContactRoberto: (contactRoberto: boolean) => {},
});

interface MessagesProviderProps {
  children: ReactNode;
  messagesListInit: TMessage[];
}

export const MessagesContextProvider: FC<MessagesProviderProps> = ({
  children, messagesListInit
}) => {
  const lastMessage = messagesListInit[messagesListInit.length - 1];
  const lastMessageAuthor = lastMessage?.author;

  const [messages, setMessages] = useState<TMessage[]>(messagesListInit);

  const addMessage = async (message: TMessage) => {
    localStorage.setItem("messages", JSON.stringify([...messages, message]));
    setMessages((prevMessages) => [...prevMessages, message]);
    if (message.author === "anne-claire") {
      setContactRoberto(true);
    }
  };

  const [contactRoberto, setContactRoberto] = useState<boolean>(
    lastMessageAuthor === "roberto" ? false : true
  );

  return (
    <MessagesContext.Provider
      value={{
        messages,
        addMessage,
        contactRoberto,
        setContactRoberto,
      }}
    >
      {children}
    </MessagesContext.Provider>
  );
};
