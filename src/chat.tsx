import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

/**
 * Chat-GPTのAPI
 * @param {} message 送信文
 * @returns 返答文
 */
export const chat = async (message: string) => {
  try {
    const completion: any = await openai.createChatCompletion({
      model: process.env.REACT_APP_OPENAI_MODEL!,
      messages: [
        {
          //TODO:返答の文字数を制限する
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
