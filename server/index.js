const express = require('express')

const app = express()

app.get('/', (_req, res) => {
  res.send({ message: 'hola mundo genial' })
})

const port = 3000

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
