import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import * as middlewares from './middlewares'

dotenv.config()

const app = express()
const port = process.env.PORT || '4000'

app.use(morgan('common'))
app.use(cors())
app.use(helmet())
app.use(bodyParser.json())

app.get('/', (_req, res) => {
  res.send({ message: 'hola mundo genial' })
})

app.use(middlewares.notFound)
app.use(middlewares.error)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
