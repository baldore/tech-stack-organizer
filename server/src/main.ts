import dotenv from 'dotenv'
import server from './server'
import mongoose from 'mongoose'

dotenv.config()

const port = process.env.PORT || '3000'
const mongodb = process.env.DB || ''

async function init () {
  try {
    await mongoose.connect(mongodb, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log('Database connection established')

    server.listen(port, () => {
      console.log(`Listening on port ${port}`)
    })
  } catch (error) {
    console.log(`Error starting server: ${error}`)
  }
}

init()
