export default function graphReducer (state = [], action) {
  switch (action.type) {
    case 'GET_RECORDS_SUCCESS':
      return action.records

    default:
      return state
  }
}
