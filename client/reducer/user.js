import { getUserID } from '../utils/userlogon'

const defaultUser = {
  user:{
    id: getUserID,
  }
  // username: 'kowhai',
  // email: 'kowhai@email.com'
}


export default function usersReducer (state = defaultUser, action) {
  switch (action.type) {
    case 'GET_USER_SUCCESS':
      return action.user

    default:
      return state
  }
}
