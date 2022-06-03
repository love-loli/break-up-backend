import express from 'express'

const app = express()
const port = '4396'

app.get('/', (_, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log('server is running on port', port)
})
