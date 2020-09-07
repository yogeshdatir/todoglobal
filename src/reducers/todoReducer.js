// Reducer is nothing but a function which evaluates an action and send down certain state depending on what that action does.

import { GET_TODOS, POST_TODOS, COMPLETE_TODO, DELETE_TODO } from '../actions/types.js'

const initialState = {
	todos: []
}

export default function(state = initialState, action) {
	switch(action.type) {
		case GET_TODOS:
			return {
				...state,
				todos: action.payload
      }
    case POST_TODOS:
			return {
				...state,
				todos: [...state.todos, action.payload]
			}
		case COMPLETE_TODO:
			return {
				...state,
				todos: state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo)
			}
		case DELETE_TODO:
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== action.payload)
			}
		default:
			return state
	}
}