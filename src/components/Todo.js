import React from 'react'
import { ListGroup } from 'react-bootstrap'

const Todo = ({ todo }) => {
  return (
    <ListGroup.Item>
      <b>{todo.title}</b>
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

export default Todo
