export default function activitiesReducer (state = [], action) {
  switch (action.type) {
    case 'GET_ACTIVITIES_SUCCESS':
      return action.activities

    default:
      return state
  }
}
