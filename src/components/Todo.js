import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { connect } from 'react-redux'
import { completeTodo, deleteTodo } from '../actions/todoActions'

const Todo = ({ todo, completeTodo, deleteTodo }) => {
  const handleCompleteTodo = (e) => {
    completeTodo({ ...todo, completed: e.target.checked })
  }
  
  const handleDelete = (e) => {
    deleteTodo(todo.id)
  }

  return (
    <ListGroup.Item>
      <input type="checkbox" id="formBasicCheckbox" className="form-check-input" onChange={handleCompleteTodo} checked={todo.completed} />
      <label title="" htmlFor="formBasicCheckbox" className={`form-check-label ${todo.completed ? "complete-todo" : ""}`}>
        {todo.title}
      </label>
      <i className="fa fa-trash delete-todo" aria-hidden="true" onClick={handleDelete}></i>
      {todo.creation_date ? (
        <span className="date">
          {new Intl.DateTimeFormat("en-GB", {
            weekday: "short",
            month: "short",
            day: "2-digit"
          }).format(new Date(todo.creation_date.toString()))}
        </span>)
        : null}
    </ListGroup.Item>
  )
}

export default connect(null, { completeTodo, deleteTodo })(Todo)
