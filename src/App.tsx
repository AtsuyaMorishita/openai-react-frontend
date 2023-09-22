import axios from "axios";
import React from "react";
import { useState } from "react";

function App() {
  // フォーム入力テキスト用
  const [formMessage, setFormMessage] = useState("");

  // 回答文用
  const [answer, setAnswer] = useState("");

  /**
   * 入力テキスト格納
   */
  const handleMessageChange = (event: any) => {
    setFormMessage(event.target.value);
  };

  /**
   * 「質問」ボタンを押したときの処理
   */
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      // API から回答を取得
      const apiUrl = process.env.REACT_APP_CHAT_GET_API;
      const requestData = {
        message: formMessage,
      };
      const responseText: any = await axios.post(apiUrl!, requestData);

      // 回答文の格納
      setAnswer(responseText.data.body.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <textarea
            rows={5}
            cols={50}
            value={formMessage}
            onChange={handleMessageChange}
          />
        </label>
        <div>
          <button type="submit">質問する</button>
        </div>
      </form>
      {answer && (
        <div>
          <h2>回答:</h2>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default App;
