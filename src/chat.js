import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

/**
 * Chat-GPTのAPI
 * @param {} message 送信文
 * @returns 返答文
 */
export const chat = async (message) => {
  try {
    const completion = await openai.createChatCompletion({
      model: process.env.OPENAI_MODEL,
      messages: [
        {
          role: "user", // "user" | "assistant" | "system"
          content: message, // string
        },
      ],
    });
    return completion.data.choices[0].message.content;
  } catch (error) {
    console.log(error);
    return null;
  }
};
