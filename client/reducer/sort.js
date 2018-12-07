export default function sortReducer (state = {}, action) {
  switch (action.type) {
    case 'SHOW_WEEK':
      return {
        ...state,
        sort: 'WEEK'
      }

    case 'SHOW_MONTH':
      return {
        ...state,
        sort: 'MONTH'
      }

    default:
      return {
        ...state,
        sort: 'WEEK'
      }
  }
}
