import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
})

export async function analyzePhoto(imageUrl: string) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4-vision-preview",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "Analyze this photograph from a professional photography perspective. Provide feedback on composition, lighting, color, and technical aspects. Also suggest potential improvements and auto-generate relevant tags."
            },
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

    return response.choices[0]?.message?.content || "Unable to analyze image"
  } catch (error) {
    console.error('OpenAI API error:', error)
    throw new Error('Failed to analyze photo')
  }
}

export { openai }
