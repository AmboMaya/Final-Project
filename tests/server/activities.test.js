const env = require('./test-environment')
const dates = require('../../server/db/activities')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

test('getActivities returns activities', () => {
  expect.assertions(1)
  const expected = 9
  return dates.getActivities(testDb)
    .then(activities => {
      const actual = activities.length
      expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})