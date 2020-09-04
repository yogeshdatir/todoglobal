import { combineReducers } from 'redux'
import todoReducer from './todoReducer'
import auth from './auth'

export default combineReducers({
  todoReducer,
  auth
})