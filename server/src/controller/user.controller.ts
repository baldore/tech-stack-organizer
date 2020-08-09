import express from 'express'
import { User } from '../models'

const router = express.Router()

router.get('/', async (_req, res, next) => {
  try {
    const users = await User.find().exec()
    res.send(users)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
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

router.get('/:id', async (req, res, next) => {
  try {
    const found = await User.findOne({ _id: req.params.id }).exec()
    res.send(found)
  } catch (error) {
    next(error)
  }
})

export default router
