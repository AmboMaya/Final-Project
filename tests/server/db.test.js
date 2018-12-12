const env = require('./test-environment')
const dates = require('../../server/db/cardData')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

test('checkDate returns one date for user 1 and date 2018-12-08', () => {
  expect.assertions(2)
  return dates.checkDate(1, '2018-12-08', testDb)
    .then(date => {
      expect(date.user_id).toBe(1)
      expect(date.date).toBe('2018-12-08')
    })
})
