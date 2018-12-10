import {combineReducers} from 'redux'

import activities from './activities'
import graph from './graph'
import user from './user'
import records from './records'
import pending from './pending'

export default combineReducers({
  activities,
  graph,
  user,
  records,
  pending
})
