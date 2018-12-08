import {combineReducers} from 'redux'

import activities from './activities'
import graph from './graph'

export default combineReducers({
  activities,
  graph
})
