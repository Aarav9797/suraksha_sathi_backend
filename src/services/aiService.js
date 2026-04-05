import OpenAI from "openai";

export async function callOpenAI(messages, systemPrompt) {
  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY, // ✅ now loaded at runtime
    });

    const completion = await openai.chat.completions.create({
      model: "gpt-5-mini",
      messages: [
        { role: "system", content: systemPrompt },
        ...messages,
      ],
      max_completion_tokens: 10000,
    });
//  console.log("Ai Res",completion.choices?.[0]?.message?.content);
    return completion.choices?.[0]?.message?.content || "";
  } catch (error) {
    console.error("OpenAI Error:", error);
    throw error;
  }
}