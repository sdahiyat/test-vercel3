import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
})

export async function analyzePhoto(imageUrl: string) {
  const response = await openai.chat.completions.create({
    model: "gpt-4-vision-preview",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "Analyze this photo and provide constructive feedback on composition, lighting, and technical aspects. Also suggest potential improvements."
          },
          {
            type: "image_url",
            image_url: {
              url: imageUrl
            }
          }
        ],
      },
    ],
    max_tokens: 500,
  })

  return response.choices[0]?.message?.content || null
}

export { openai }
