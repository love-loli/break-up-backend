import express from 'express'
import { readerClient } from './db'
import 'dotenv/config'

const app = express()
const port = '4396'

app.get('/', async (_, res) => {
  const result = await readerClient.from('test').select('test')
  console.log(result)
  res.send(JSON.stringify(result))
})

app.listen(port, () => {
  console.log('server is running on port', port)
})
