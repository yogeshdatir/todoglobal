import { GET_TODOS, POST_TODOS, COMPLETE_TODO, DELETE_TODO } from './types.js'
import axiosInstance from '../axiosInstances/axios.js'
import { tokenConfig } from './auth.js'
import { toast } from 'react-toastify'

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
    .catch(err => 
      err.response.data['title'][0] && 
      toast.error("Please, Enter the Todo Title...", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      )
}

export const completeTodo = (todo) => (dispatch, getState) => {

  axiosInstance.put(`/todos/${todo.id}/`, todo, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: COMPLETE_TODO,
        payload: res.data
      })
    })
    .catch(err => console.log(err))
}

export const deleteTodo = (id) => async (dispatch, getState) => {

  await axiosInstance.delete(`/todos/${id}/`, tokenConfig(getState))
    .then(res => {
      toast.success('To Do Deleted', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      dispatch({
        type: DELETE_TODO,
        payload: id
      })
    })
    .catch(err => console.log(err))
}


export const filterTodos = (filterName, filterValue) => (dispatch, getState) => {
  let config = tokenConfig(getState)
  config.params = {
    [filterName]: filterValue
  }
  axiosInstance.get('/todos/', config)
    .then(res => {
      dispatch({
        type: GET_TODOS,
        payload: res.data
      })
    })
    .catch(err => console.log(err))
}