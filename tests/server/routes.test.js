const server = require('../../server/server')
const request = require('supertest')

test('/', () => {
  expect.assertions(1)
  return request(server)
    .get('/')
    .then((res) => {
      expect(res.status).toBe(200)
    })
})

test('/api/v1/records/1/2018-01-01', () => {
  expect.assertions(1)
  return request(server)
    .get('/api/v1/records/1/2018-01-01')
    .then((res) => {
      expect(res.status).toBe(200)
    })
})

test('/api/v1/activities/', () => {
  expect.assertions(1)
  return request(server)
    .get('/api/v1/records/1/2018-01-01')
    .then((res) => {
      expect(res.status).toBe(200)
    })
})

