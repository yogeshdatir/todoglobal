import React, {useState} from 'react'
import { FormControl, InputGroup, Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import { postTodos } from '../actions/todoActions'

const TodoForm = ({postTodos}) => {

  const [newTodo, setNewTodo] = useState({})

  const onChangeHandler = (e) => {
    setNewTodo({ [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    postTodos(newTodo)
    setNewTodo("")
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

export default connect(null, { postTodos })(TodoForm)
