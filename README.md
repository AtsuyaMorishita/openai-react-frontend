# OpenAI API ✖️ AWS ✖️ React アプリケーション制作

[バックエンド側のリポジトリ](https://github.com/AtsuyaMorishita/openai-react-backend)

入力フォームを 2 箇所用意して、下記のような回答を得られるようにする。

- コードを入力したらリファクタをしてくれる
- エラー文を入力したら、解説と対処方法を教えてくれる

## 仕様

- AWS Lambda  
  OpenAI API を叩くために使用する。  
  API Gateway と統合して、リクエストを送る。  
  目的としては、仮に OpenAI の API キーが漏れた際に、外部から不正に API を叩かれる可能性があるため、一旦 Lambda を挟む。

- AWS Amplify  
  デプロイ用

- AWS Cognito  
  アプリにログイン機能を実装する。  
  また Cognito でログインしたユーザーだけが API Gateway を叩けるようにする。

- AWS DynamoDB  
  質問後、ユーザー情報、入力したテキストと回答文を保存する。  
  ユーザーごとに自分の質問履歴を見れるようにする。
