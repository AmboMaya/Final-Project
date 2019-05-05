import request from 'superagent'

import {setToken} from '../utils/tokens'
import {setUserId} from '../utils/user'

export const loginPending = () => ({type: 'LOGIN_PENDING'})

export const loginSuccess = () => ({type: 'LOGIN_SUCCESS'})

export const loginFailure = error => ({type: 'LOGIN_FAILURE', error})

export const login = (username, password) => dispatch => {
  dispatch(loginPending())
  return request
    .post('/api/v1/auth/login')
    .send({username, password})
    .then(res => {
      setToken(res.body.token)
      setUserId(res.body.userId)
      dispatch(loginSuccess())
    })
    .catch(err => dispatch(loginFailure(err.response.body.error)))
}

export const registerPending = () => ({type: 'REGISTER_PENDING'})

export const registerSuccess = () => ({type: 'REGISTER_SUCCESS'})

export const registerFailure = error => ({type: 'REGISTER_FAILURE', error})

export const register = (username, password, email) => dispatch => {
  dispatch(registerPending())

  return request
    .post('/api/v1/auth/register')
    .send({username, password, email})
    .then(res => {
      console.log(`token ${res.body.token} + uID${res.body.userId}`)
      setToken(res.body.token)
      setUserId(res.body.userId)
      dispatch(registerSuccess())
    })
    .catch(err => dispatch(registerFailure(err.response.body.error)))
}

export const logout = () => ({type: 'LOGOUT'})
