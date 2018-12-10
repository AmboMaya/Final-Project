export default function pendingReducer (state = false, action) {
  switch (action.type) {
    case 'GET_ACTIVITIES_PENDING':
      return {
        ...state,
        pending: true
      }
    case 'GET_RECORDS_PENDING':
      return {
        ...state,
        pending: true
      }

    default:
      return state
  }
}
