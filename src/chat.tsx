import { Configuration, OpenAIApi } from "openai";

//API用の初期設定
const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

/**
 * OpenAIのAPIから回答文を取得する
 */
export async function chatGetMessage(message: string) {
  try {
    const completion: any = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          //TODO:返答の文字数を制限する
          role: "user", // "user" | "assistant" | "system"
          content: message, // string
        },
      ],
    });
    const getMessage = completion.data.choices[0].message.content;
    return getMessage;
  } catch (error) {
    console.log(error);
    return null;
  }
}
