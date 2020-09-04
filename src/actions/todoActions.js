import { GET_TODOS, POST_TODOS } from './types.js'
import axiosInstance from '../axiosInstances/axios.js'
import { tokenConfig } from './auth.js'

export const getTodos = () => (dispatch, getState) => {
  axiosInstance.get('/todos/', tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_TODOS,
        payload: res.data
      })
    })
    .catch(err => console.log(err))
}

export const postTodos = (todo) => (dispatch, getState) => {

  axiosInstance.post("/todos/", todo, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: POST_TODOS,
        payload: res.data
      })
    })
    .catch(err => console.log(err))
}