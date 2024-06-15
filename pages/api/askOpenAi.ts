// This code is for v4 of the openai package: npmjs.com/package/openai
import { TAnimal } from "@/app/type";
import { TMessage } from "@/components/MessageContextProvider";
import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

const openai = new OpenAI({
  apiKey: process.env.NEXT_OPENAI_API_KEY,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<unknown>
) {
  if (req.method === "POST") {
    const messagesList = req.body.messagesList;
    const animal_female = req.body.animal_female as TAnimal;
    const animal_male = req.body.animal_male as TAnimal;

    const enum_female_plural = {
      giraffe: "girafons",
      koala: "koalas",
      human: "femmes",
    };
    const female_plural = enum_female_plural[animal_female];
    const enum_male_singular = {
      giraffe: "un girafon",
      koala: "un koala",
      human: "un homme",
    };
    const male_singular = enum_male_singular[animal_male];
    const enum_male_plural = {
      giraffe: "girafons",
      koala: "koalas",
      human: "hommes",
    };
    const male_plural = enum_male_plural[animal_male];

    const content = `Tu t'appelles Roberto spécialiste des rencontres entre ${female_plural} et ${male_plural} depuis plus de 15 ans.
    Tu dialogues avec Anne-Claire, ton objectif est de lui faire rencontrer son âme soeur.\n
    Le dialogue doit se dérouler en étapes:\n\n

    ETAPE n°1:\n
    Commence par présenter tes services et lui demander si elle serait intéressé\n\n

    ETAPE n°2:\n
    Si elle est intéressée, cela tombe bien, tu connais justement ${male_singular} qui pourrait lui convenir. Tu ne dois pas dévoiler son identité (prénom, nom) pendant l'échange.
    Poses lui la question si elle serait intéressée de faire sa connaissance.\n\n

    ETAPE n°3:\n
    Si elle est partante, tu dois lui donner le choix entre :\n
    1) prendre contact à l'écrit\n
    2) organiser une première rencontre.\n\n

    ETAPE n°4:\n
    Si elle choisit de prendre contact à l'écrit (choix n°1), recommande lui de lui écrire via Whatsapp et elle pourra toujours revenir vers toi si elle change d'avis.\n
    Si elle choisit la rencontre (choix n°2), tu peux organiser un premier rendez vous.\n
    Pour cela tu dois lui partager l'URL calendly.com/roberto-rencontre/ac pour définir l'heure et le lieu de la rencontre.\n\n

    Tout au long tu processus, si tu sens qu'elle n'est pas intéressée, tu dois lui dire que tu comprends et qu'elle peut revenir vers toi quand elle le souhaite.\n
    Ne presse pas les choses et assure d'avoir son retour avant de passer à chaque étape suivante.`;

    const messagesListOpenAi = convertMessagesListToOpenAiFormat(messagesList);
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: content },
        { role: "assistant", content: "Bonjour Roberto" },
        ...messagesListOpenAi,
      ],
    });
    res.status(200).json({
      output: response.choices[0].message.content,
      input: messagesListOpenAi,
      male_plural: male_plural,
    });
  } else {
    res.status(400).json({ error: "Not allowed" });
  }
}

const convertMessagesListToOpenAiFormat = (
  messagesList: TMessage[]
): ChatCompletionMessageParam[] => {
  const openAiMessagesList = messagesList.map((message) => {
    return {
      role:
        message.author === "roberto"
          ? "assistant"
          : ("user" as "assistant" | "user"),
      content: message.text,
    };
  });
  return openAiMessagesList;
};
