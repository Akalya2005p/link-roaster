const OpenAI = require("openai");

console.log("OPENROUTER KEY EXISTS:", !!process.env.OPENROUTER_API_KEY);

const client = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

const generateRoast = async (title, content) => {
  const completion = await client.chat.completions.create({
    model: "meta-llama/llama-3.1-8b-instruct",
    messages: [
      {
        role: "user",
        content: `
You are Link Roaster AI.

Analyze the website and return ONLY valid JSON.

Website Title:
${title}

Website Content:
${content.substring(0, 2500)}

Rules:
1. Return ONLY JSON.
2. No markdown.
3. No code blocks.
4. No explanations.
5. Do not add extra fields.
6. Use exactly this structure:

{
  "summary":"",
  "roast":"",
  "verdict":""
}

Requirements:
- summary: 2 concise sentences
- roast: funny but not offensive
- verdict: short one-line punchline
`,
      },
    ],
    temperature: 0.7,
  });

  const response = completion.choices[0].message.content;

  try {
    const cleaned = response
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(cleaned);
  } catch (error) {
    console.error("JSON Parse Error:", response);

    return {
      summary: "Unable to generate summary.",
      roast: "The AI got roasted instead of the website.",
      verdict: "Try again.",
    };
  }
};

module.exports = generateRoast;
