import React from "react";
import { useState } from "react";
import { chatGetMessage } from "./chat";

function App() {
  // フォーム入力テキスト用
  const [message, setMessage] = useState("");

  // 回答文用
  const [answer, setAnswer] = useState("");

  /**
   * 入力テキスト格納
   */
  const handleMessageChange = (event: any) => {
    setMessage(event.target.value);
  };

  /**
   * 「質問」ボタンを押したときの処理
   */
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    // API から回答を取得
    const responseText = await chatGetMessage(message);

    // 回答文の格納
    setAnswer(responseText);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <textarea
            rows={5}
            cols={50}
            value={message}
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
