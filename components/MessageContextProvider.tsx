import React, { createContext, useState, FC, ReactNode } from "react";

export type TMessage = {
  text: string;
  author: "anne-claire" | "roberto";
};

// Create the context with a default value
export const MessagesContext = createContext({
  messages: [] as TMessage[],
  addMessage: (message: TMessage) => {},
});

interface MessagesProviderProps {
  children: ReactNode;
}

export const MessagesContextProvider: FC<MessagesProviderProps> = ({
  children,
}) => {

    const messagesInitialState: TMessage[] = [
        {
            text: "Salut Anne Claire !",
            author: "roberto",
        },
        {
            text: "Salut Roberto !",
            author: "anne-claire",
        },
        {
            text: "Comment vas-tu ?",
            author: "roberto",
        },
        {
            text: "Je vais bien et toi ?",
            author: "anne-claire",
        },
        {
            text: "Je vais bien aussi !",
            author: "roberto",
        },
    ];
  const [messages, setMessages] = useState<TMessage[]>(messagesInitialState);

  const addMessage = (message: TMessage) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <MessagesContext.Provider value={{ messages, addMessage }}>
      {children}
    </MessagesContext.Provider>
  );
};
