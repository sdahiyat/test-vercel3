import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function analyzePhoto(imageUrl: string) {
  const response = await openai.chat.completions.create({
    model: "gpt-4-vision-preview",
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: "Analyze this photo and provide feedback on composition, lighting, and technical aspects. Be constructive and helpful." },
          { type: "image_url", image_url: { url: imageUrl } }
        ],
      },
    ],
    max_tokens: 300,
  })

  return response.choices[0]?.message?.content || "Unable to analyze photo"
}

export { openai }
