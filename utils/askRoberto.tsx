import { TMessage } from "@/components/MessageContextProvider";

export async function askRoberto(
  messagesList: TMessage[]
): Promise<string | null> {
  try {
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
    
    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }
    
    const data = await response.json();
    console.log(localStorage.getItem("animal_female"));
    console.log(localStorage.getItem("animal_male"));
    console.log("data", data);
    return data.output;
  } catch (error) {
    console.error("API call failed:", error);
    throw error;
  }
}
