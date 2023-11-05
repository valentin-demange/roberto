// This code is for v4 of the openai package: npmjs.com/package/openai
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.NEXT_OPENAI_API_KEY,
});

export const askOpenAi = async (req: any, res: any) => {
  if (req.method === "POST") {
    const { messagesList } = req.body;
    // const completion = await openai.chat.completions.create({
    //   model: "gpt-4",
    //   messages: [],
    //   temperature: 0,
    //   max_tokens: 1024,
    // });
    res.status(200).json({ result: process.env.NEXT_OPENAI_API_KEY,
    messagesList: messagesList });
  }
};

// const configuration = new Configuration({
//   apiKey: process.env.NEXT_OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// export default async function (req:any, res:any) {
//   const completion = await openai.createCompletion({
//     model: "text-davinci-002",
//     prompt: req.body.promptOpenAi,
//     temperature: 0.9,
//     max_tokens: 150,
//     stop: [`${req.body.userName}:`, `Gilbert:`],
//     top_p: 1,
//     frequency_penalty: 0,
//     presence_penalty: 0.6,
//     best_of: 1,
//     });
//   res.status(200).json({ result: completion.data.choices[0].text });
// }
