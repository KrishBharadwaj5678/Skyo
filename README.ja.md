[English](README.md) | [Português](README.pt.md) | [日本語](README.ja.md) | [Русский](README.ru.md)

# 🌤️ Skyo

**Skyo** は、世界中の任意の都市のリアルタイム天気情報と空気質データを提供する、クリーンでモダンかつレスポンシブな天気アプリです。

![Skyo Preview](https://github.com/KrishBharadwaj5678/Skyo/raw/main/SkyoDemo.png)

## 🚀 機能

| 機能              | 説明                              |
| --------------- | ------------------------------- |
| 🌍 都市検索         | 世界中の都市の天気情報を検索可能                |
| 🌡️ 現在の気温       | リアルタイムの気温（℃）を表示                 |
| 🌬️ 風情報         | 風速と風向きを表示                       |
| 💧 湿度           | リアルタイムの湿度（％）                    |
| 👁️ 視界距離        | 視界の距離（km）を表示                    |
| 🌅 日の出・日の入り     | 正確な日の出・日の入り時刻                   |
| 🌡️ 体感温度        | 気象条件に基づいた体感温度                   |
| 🧪 大気質データ       | リアルタイムの大気汚染情報                   |
| 🧫 汚染物質         | PM2.5、PM10、NO₂、NO、CO、SO₂、NH₃、O₃ |
| 🌙 ダーク / ライトモード | 使いやすいテーマ切り替え                    |
| 📱 レスポンシブデザイン   | モバイル・タブレット・PC対応                 |
| ⚡ 高速UI          | スムーズな遷移と即時更新                    |

---

## 🛠️ 技術スタック

| カテゴリ          | 技術                |
| ------------- | ----------------- |
| ⚛️ フロントエンド    | React.js          |
| 🧠 状態管理       | React Context API |
| 🎨 スタイリング     | Tailwind CSS      |
| 🌦️ API       | OpenWeather API   |
| 🔗 HTTPクライアント | Axios             |

---

## ⚙️ インストール手順

### 1️⃣ リポジトリをクローン

```bash id="k8x1lm"
git clone https://github.com/KrishBharadwaj5678/Skyo.git
```

### 2️⃣ プロジェクトディレクトリへ移動

```bash id="m4v9za"
cd Skyo
```

### 3️⃣ 依存関係をインストール

```bash id="t7x2lm"
npm install
```

### 4️⃣ 開発サーバーを起動

```bash id="p3v8cd"
npm run dev
```

### 5️⃣ ブラウザで開く

---

## 🔐 環境変数

プロジェクトのルートに `.env` ファイルを作成し、以下を追加してください：

```env id="88fnj2"
VITE_BASE_URL = "https://api.openweathermap.org/data/2.5"
VITE_APP_ID = あなたのAPIキー
```
