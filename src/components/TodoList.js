import React, {useState, useEffect} from 'react'
import axiosInstance from '../axiosInstances/axios'

const TodoList = () => {
  const initialState = []
  const [todos, setTodos] = useState(initialState)

  useEffect(() => {
    axiosInstance.get('/todos/')
      .then(res => {
        setTodos(res.data)
      })
      .catch(err => console.log(err))
  },[])

  return (
    <>
      <h1>Your ToDo List</h1>
      <ol>
        {todos.map(todo => (
          <li key={todo.id}>Title: <b>{todo.title}</b></li>
        ))}
      </ol>
    </>
  )
}

export default TodoList
