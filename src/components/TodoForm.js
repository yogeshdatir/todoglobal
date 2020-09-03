import React from 'react'
import { FormControl, InputGroup, Form } from 'react-bootstrap'
import axiosInstance from '../axiosInstances/axios'

const TodoForm = ({newTodo, setNewTodo, todos, setTodos}) => {


  const onChangeHandler = (e) => {
    setNewTodo({[e.target.name]: e.target.value})
  }

  const onSubmit = (e) => {
    e.preventDefault()
    axiosInstance.post("/todos/", newTodo)
      .then(res => {
        setTodos([...todos, res.data])
        setNewTodo({})
      })
      .catch(e => console.log(e))
  }

  return (
    <Form onSubmit={onSubmit}>
      <InputGroup className="mb-3" variant="dark">
        <FormControl
          placeholder="New Task"
          aria-label="New Task"
          name="title"
          onChange={onChangeHandler}
          value={newTodo.title || ""}
        />
      </InputGroup>
    </Form>
  )
}

export default TodoForm