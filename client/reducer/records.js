export default function recordReducer (state = [], action) {
  switch (action.type) {
    case 'GET_RECORD_SUCCESS':
      return action.record

    case 'ADD_RECORD_SUCCESS':
      return action.record

    default:
      return state
  }
}
