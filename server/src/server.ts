import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import bodyParser from 'body-parser'
import * as middlewares from './middlewares'

const server = express()

server.use(morgan('common'))
server.use(cors())
server.use(helmet())
server.use(bodyParser.json())

server.get('/', (_req, res) => {
  setTimeout(() => {
    res.send({ message: 'hola mundo genial' })
  }, 500)
})

server.use(middlewares.notFound)
server.use(middlewares.error)

export default server
