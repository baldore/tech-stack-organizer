import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import bodyParser from 'body-parser'
import * as middlewares from './middlewares'
import * as controllers from './controller'

const server = express()

server.use(morgan('common'))
server.use(cors())
server.use(helmet())
server.use(bodyParser.json())

// Controllers
server.use('/user', controllers.user)

server.use(middlewares.notFound)
server.use(middlewares.error)

export default server
