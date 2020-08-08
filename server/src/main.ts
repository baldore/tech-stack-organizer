import dotenv from 'dotenv'
import server from './server'
import mongoose from 'mongoose'

dotenv.config()

const port = process.env.PORT || '3000'
const mongodb = 'mongodb://database/techstack'

;(async () => {
  await mongoose.connect(mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
})()

mongoose.connection.on('error', (err) => {
  console.log('Error connecting to database: ', err)
})

mongoose.connection.on('open', () => {
  console.log('Database connection established')

  server.listen(port, () => {
    console.log(`Listening on port ${port}`)
  })
})
