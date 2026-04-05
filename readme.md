# 🚀 Backend API (AI Service)

This is the backend service for the application, built using **Node.js + Express**, and integrated with **OpenAI (ChatGPT)** for AI-powered features.

---

## 📦 Tech Stack

* Node.js
* Express.js
* OpenAI API
* dotenv
* CORS
* Morgan (logging)

---

## 📁 Project Structure

```
backend/
│── src/
│   ├── routes/
│   │   └── aiRoute.js
│   ├── services/
│   │   └── aiService.js
│   ├── app.js
│── server.js
│── .env
│── package.json
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```
git clone <your-repo-url>
cd backend
```

---

### 2. Install dependencies

```
npm install
```

---

### 3. Create `.env` file

Create a `.env` file in the root directory:

```
OPENAI_API_KEY=your_openai_api_key_here
PORT=8001
```

---

### 4. Run the server

```
npm run dev
```

or

```
node server.js
```

---

## 🌐 API Endpoints

### 🔹 POST `/api/v1/ai/chat`

Send messages to OpenAI and get AI-generated response.

#### Request Body

```
{
  "messages": [
    { "role": "user", "content": "Explain React" }
  ],
  "systemPrompt": "You are a helpful assistant"
}
```

#### Response

```
{
  "success": true,
  "data": "React is a JavaScript library..."
}
```

---

## 🧠 AI Service (OpenAI)

### Example Service

```js
import OpenAI from "openai";

export async function callOpenAI(messages, systemPrompt) {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const completion = await openai.chat.completions.create({
    model: "gpt-5-mini",
    messages: [
      { role: "system", content: systemPrompt },
      ...messages,
    ],
    max_completion_tokens: 1000,
  });

  return completion.choices?.[0]?.message?.content || "";
}
```

---

## 🔒 Security Notes

* ❌ Never expose API keys in frontend
* ✅ Always call OpenAI via backend
* ✅ Use `.env` for sensitive data

---

## ⚡ Features

* AI chat endpoint
* Secure API key handling
* Modular architecture (routes + services)
* Easy frontend integration

---

## 🚀 Future Improvements

* Streaming responses (real-time typing)
* Rate limiting
* Authentication (JWT)
* Chat history storage (DB)
* Multi-model support (Claude + OpenAI)

---



---

## 📜 License

This project is licensed under the MIT License.
