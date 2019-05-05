const defaultUser = {
  id: 1,
  username: 'kowhai',
  email: 'kowhai@email.com'
}

export default function usersReducer (state = defaultUser, action) {
  switch (action.type) {
    case 'GET_USER_SUCCESS':
      return action.user

    default:
      return state
  }
}
