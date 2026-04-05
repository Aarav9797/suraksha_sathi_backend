import express from "express";
import { callOpenAI } from "../services/aiService.js";

const router = express.Router();

router.post("/chat", async (req, res) => {
  try {
    const { messages, systemPrompt } = req.body;

    const response = await callOpenAI(messages, systemPrompt);

    res.json({
      success: true,
      data: response,
    });
  } catch (error) {
    console.error("Route Error:", error);
    res.status(500).json({ error: "AI request failed" });
  }
});

export default router;