import express from 'express'
import generateFromOpenAI from './openai-test.js'

const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/api/askgrumpy/:prompt', async (req, res) => {
  const grumpyCatResponse = await generateFromOpenAI(req.params.prompt)
  res.send(grumpyCatResponse)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})