import {combineReducers} from 'redux'

import activities from './activities'
import auth from './auth'
import graph from './graph'
import user from './user'
import records from './records'
import pending from './pending'
import selectedDate from './selectedDate'

export default combineReducers({
  activities,
  auth,
  graph,
  user,
  records,
  pending,
  selectedDate
})
