export default function activitiesReducer (state = [], action) {
  switch (action.type) {
    case 'GET_ACTIVITIES_SUCCESS':
      return action.activities

    case 'GET_ACTIVITIES_PENDING':
      return {
        ...state,
        pending: true
      }

    default:
      return state
  }
}
