import React, { useEffect } from 'react'
import { ListGroup } from 'react-bootstrap'
import Todo from './Todo'
import { connect } from 'react-redux'
import { getTodos } from '../actions/todoActions'

const TodoList = ({ todos, getTodos }) => {

  useEffect(() => {
    const test = async () => {
      await getTodos()
    }
    test()
  }, [getTodos])

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

const mapStateToProps = state => ({
	// any_name: state.(reducer_name_from_root_reducer).(part_of_state)
	todos: state.todoReducer.todos
})

export default connect(mapStateToProps, { getTodos })(TodoList)
