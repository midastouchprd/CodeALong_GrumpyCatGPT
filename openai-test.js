import 'dotenv/config'
import OpenAI from "openai";


  const openai = new OpenAI({
    apiKey: process.env.API_KEY,
  });

  const CHAT_GPT_SUFFIX = `(as grumpy cat but ends with a positive not-so-bad spin, and
      also not able to justify being grumpy anymore, and in less then 19 words)`



const generateFromOpenAI = async (userPrompt) => {
  const content = `${userPrompt} ${CHAT_GPT_SUFFIX}`
  console.log(content);
  try {
    const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content }],
        max_tokens: 30
    });

    console.log(completion.choices)

    return completion.choices[0].message.content

  } catch (msg) {
    console.error(msg);
  }
}

export default generateFromOpenAI;