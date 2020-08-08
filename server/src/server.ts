import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import bodyParser from 'body-parser'
import * as middlewares from './middlewares'

import mongoose, { Schema } from 'mongoose'

interface UserModel extends mongoose.Document {
  username: string,
  firstName: string,
  lastName: string,
}

const UserSchema = new Schema({
  username: String,
  firstName: String,
  lastName: String,
})

const User = mongoose.model<UserModel>('User', UserSchema)

const server = express()

server.use(morgan('common'))
server.use(cors())
server.use(helmet())
server.use(bodyParser.json())

server.get('/', async (_req, res) => {
  const users = await User.find().exec()
  res.send(users)
})

server.get('/:id', (req, res) => {
  res.send({ message: `asking for ${req.params.id}` })
})

server.post('/', async (req, res, next) => {
  const { username, firstName, lastName } = req.body
  const newUser = new User()

  newUser.username = username
  newUser.firstName = firstName
  newUser.lastName = lastName

  try {
    await newUser.save()
    res.send(newUser)
  } catch (error) {
    next(error)
  }
})

server.use(middlewares.notFound)
server.use(middlewares.error)

export default server
