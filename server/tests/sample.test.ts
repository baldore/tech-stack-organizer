import request from 'supertest'
import server from '../src/server'

describe('my test', () => {
  it('should test something', async () => {
    const res = await request(server).get('/')

    expect(res.status).toBe(200)
    expect(res.body).toMatchInlineSnapshot(`
      Object {
        "message": "hola mundo genial",
      }
    `)
  })
})
