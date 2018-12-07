import {combineReducers} from 'redux'

import sort from './sort'
import graph from './graph'
import activities from './activities'

export default combineReducers({
  graph,
  sort,
  activities
})
