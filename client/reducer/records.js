// const defaultState = [
//   {
//     dateId: '1',
//     date: '2018-10-01',
//     userId: '1',
//     cardData: [
//       {
//         id: '1',
//         activityId: '5',
//         rating: '5',
//         log: '...'
//       },
//       {
//         id: '2',
//         activityId: '2',
//         rating: '3',
//         log: '...'
//       }
//     ]
//   }
// ]
//
// Sequence of events:
//
// 1. User clicks on Meditation smile.
// 2. Action dispatched: addActivity
// 3. Server checks if date record already exists for today.
// 4. If not, adds a new one.
// 5. If so, adds an activity (cardData) to existing date record for today.
// 6. In either case, returns date record with activities updated.

export default function recordReducer(state = [], action) {
  switch (action.type) {
    case 'GET_RECORD_SUCCESS':
      return action.records

    case 'GET_RECORDS_SUCCESS':
      return action.records

    case 'ADD_RECORD_SUCCESS':
      const newState = state.filter(rec => rec.dateId !== action.records.dateId)
      return [...newState, action.records]

    default:
      return state
  }
}
