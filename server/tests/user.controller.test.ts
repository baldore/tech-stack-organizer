import request from 'supertest'
import server from '../src/server'
import { User } from '../src/models'
import mongoose from 'mongoose'

import dotenv from 'dotenv'
dotenv.config()

const databaseUrl = process.env.TEST_DB || ''
let connection: typeof mongoose

beforeAll(async () => {
  connection = await mongoose.connect(databaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
})

afterEach(async () => {
  await User.deleteMany({})
})

afterAll(async () => {
  await connection.disconnect()
})

describe('User', () => {
  it('should test something', async () => {
    const res = await request(server).get('/user')
    expect(res.status).toBe(200)
    expect(res.body).toMatchInlineSnapshot('Array []')
  })

  it('should add a new user', async () => {
    const body = {
      username: 'baldore',
      firstName: 'foo',
      lastName: 'bar',
    }
    const createRes = await request(server).post('/user').send(body)
    const id = createRes.body._id
    const res = await request(server).get(`/user/${id}`)
    expect(res.body.username).toBe('baldore')
    expect(res.body.firstName).toBe('foo')
    expect(res.body.lastName).toBe('bar')
  })
})
