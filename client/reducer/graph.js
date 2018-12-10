export default function graphReducer (state = {}, action) {
  switch (action.type) {
    case 'GET_RECORDS_SUCCESS':
      return action.records

    case 'GET_RECORDS_PENDING':
      return {
        ...state,
        pending: true
      }

    default:
      return state
  }
}
