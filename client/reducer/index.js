import {combineReducers} from 'redux'

import activities from './activities'
import graph from './graph'
import user from './user'

export default combineReducers({
  activities,
  graph,
  user
})
