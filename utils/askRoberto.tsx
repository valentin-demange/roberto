import { TMessage } from "@/components/MessageContextProvider";

export async function askRoberto(messagesList: TMessage[]):Promise<string|null> {
    return "Bonjour c'est Roberta !!"
    try {
      const response = await fetch("/api/askOpenAi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
        //   promptOpenAi: formatGilbertPrompt(messagesList, userName),
        //   userName: userName,
        messages: messagesList,
        }),
      });
      const data = await response.json();
      console.log("data.result: ", data.result)
      return "Bonjour c'est Roberta !!";
    } catch (error: any) {
      alert(error.message);
    }
    return null;
  }
  