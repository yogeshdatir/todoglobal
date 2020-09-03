import React, { useEffect } from 'react'
import axiosInstance from '../axiosInstances/axios'
import { ListGroup } from 'react-bootstrap'
import Todo from './Todo'

const TodoList = ({ todos, setTodos }) => {

  useEffect(() => {
    axiosInstance.get('/todos/')
      .then(res => {
        setTodos(res.data)
      })
      .catch(err => console.log(err))
  }, [setTodos])

  return (
    <>
      <ListGroup variant="flush">
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ListGroup>
    </>
  )
}

export default TodoList
