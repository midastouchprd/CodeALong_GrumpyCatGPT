import 'dotenv/config'
import { Configuration, OpenAIApi } from "openai";

const YOUR_CONFIGURATION_INFO = {
  FROM_OPEN_AI: new Configuration({
    organization: process.env.ORGANIZATION, // see OpenAI docs
    apiKey: process.env.API_KEY, // see OpenAI docs
  }),
  
  CHANGE_ME: `(as grumpy cat but ends with a positive not-so-bad spin, and 
      also not able to justify being grumpy anymore, and in less then 19 words)`
}

const openai = new OpenAIApi(YOUR_CONFIGURATION_INFO.FROM_OPEN_AI);

const generateFromOpenAI = async (userPrompt) => {
  const content = `${userPrompt} ${YOUR_CONFIGURATION_INFO.CHANGE_ME}`
  console.log(content);
  try {
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content }],
        max_tokens: 30
    });
    
    console.log(completion.data)

    return completion.data.choices[0].message.content
  
  } catch (msg) {
    console.error(msg.response.data);
  }  
}

export default generateFromOpenAI;