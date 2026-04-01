import OpenAI from 'openai'

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function analyzePhoto(imageUrl: string, prompt: string = "Analyze this photo and provide constructive feedback") {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4-vision-preview",
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: prompt },
            {
              type: "image_url",
              image_url: {
                url: imageUrl,
              },
            },
          ],
        },
      ],
      max_tokens: 300,
    })

    return response.choices[0]?.message?.content || "No analysis available"
  } catch (error) {
    console.error('Error analyzing photo:', error)
    throw new Error('Failed to analyze photo')
  }
}
