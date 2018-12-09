import {combineReducers} from 'redux'

import activities from './activities'
import graph from './graph'
import records from './records'

export default combineReducers({
  activities,
  graph,
  records
})
