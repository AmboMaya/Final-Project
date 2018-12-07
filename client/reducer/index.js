import {combineReducers} from 'redux'

import sortReducer from './sort'
import graphReducer from './graph'

export default combineReducers({
  graphReducer,
  sortReducer
})
