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
}

export const MessagesContextProvider: FC<MessagesProviderProps> = ({
  children,
}) => {
  const [messages, setMessages] = useState<TMessage[]>([]);

  const addMessage = async (message: TMessage) => {
    if (message.author === "roberto") {
      setMessages((prevMessages) => [...prevMessages, message]);
    } else if (message.author === "anne-claire") {
      setMessages((prevMessages) => [...prevMessages, message]);
      setContactRoberto(true);
    }
  };

  const [contactRoberto, setContactRoberto] = useState<boolean>(true);

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
