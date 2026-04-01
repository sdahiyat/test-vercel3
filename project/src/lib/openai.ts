import OpenAI from 'openai'

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
})

export async function analyzePhoto(imageUrl: string) {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4-vision-preview',
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: 'Analyze this photograph and provide constructive feedback on composition, lighting, and technical aspects. Also suggest 3-5 relevant tags.'
            },
            {
              type: 'image_url',
              image_url: { url: imageUrl }
            }
          ]
        }
      ],
      max_tokens: 500
    })

    return response.choices[0]?.message?.content || 'Unable to analyze image'
  } catch (error) {
    console.error('OpenAI analysis error:', error)
    throw new Error('Failed to analyze photo')
  }
}
