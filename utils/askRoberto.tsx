import { TMessage } from "@/components/MessageContextProvider";
import { lockfilePatchPromise } from "next/dist/build/swc";

export async function askRoberto(
  messagesList: TMessage[]
): Promise<string | null> {
    const response = await fetch("/api/askOpenAi", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messagesList: messagesList,
        animal_female: localStorage.getItem("animal_female"),
        animal_male: localStorage.getItem("animal_male"),
      }),
    });
    console.log(localStorage.getItem("animal_female"));
    console.log(localStorage.getItem("animal_male"));
    const data = await response.json();
    console.log("data", data);
    return data.output;
}
