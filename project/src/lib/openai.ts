import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export { openai }

export async function analyzePhoto(imageUrl: string, prompt?: string) {
  const defaultPrompt = `Analyze this photograph and provide constructive feedback on:
  1. Composition and framing
  2. Lighting and exposure
  3. Color balance and mood
  4. Technical quality
  5. Suggestions for improvement
  
  Keep the feedback encouraging but helpful for a photographer looking to improve.`

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4-vision-preview',
      messages: [
        {
          role: 'user',
          content: [
            { type: 'text', text: prompt || defaultPrompt },
            {
              type: 'image_url',
              image_url: {
                url: imageUrl,
              },
            },
          ],
        },
      ],
      max_tokens: 500,
    })

    return response.choices[0].message.content
  } catch (error) {
    console.error('OpenAI API error:', error)
    throw new Error('Failed to analyze photo')
  }
}
