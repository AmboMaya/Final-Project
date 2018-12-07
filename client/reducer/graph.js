export default function graphReducer (state = {}, action) {
  switch (action.type) {
    case 'GET_DATA_PENDING':
      return {
        ...state,
        pending: true
      }

    case 'GET_DATA_SUCCESS':
      return {
        ...state,
        pending: false,
        error: null
      }

    case 'GET_DATA_ERROR':
      return {
        ...state,
        pending: false,
        error: action.message
      }

    default:
      return state
  }
}
