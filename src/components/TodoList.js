import React, { useState, useEffect } from 'react'
import { ListGroup, DropdownButton, Dropdown } from 'react-bootstrap'
import Todo from './Todo'
import { connect } from 'react-redux'
import { getTodos } from '../actions/todoActions'

const TodoList = ({ todos, getTodos }) => {
  const [filteredTodos, setFilteredTodos] = useState(null)
  const [selectedFilter, setSelectedFilter] = useState("Filter")

  useEffect(() => {
    const test = async () => {
      await getTodos()
    }
    test()
  }, [getTodos])

  const filterTodos = (e) => {
    setSelectedFilter(e.target.innerText)
    switch (e.target.id) {
      case "no-filter":
        setFilteredTodos(todos)
        break
      case "inprogress-filter":
        setFilteredTodos(todos.filter(todo => !todo.completed))      
        break
      case "completed-filter": 
        setFilteredTodos(todos.filter(todo => todo.completed)) 
        break
      default:
        break
    }
  }

  return (
    <>
      <ListGroup variant="flush">
        <div className="inline">
          <DropdownButton className="float-right" id="filter-dropdown" title={selectedFilter}>
            <Dropdown.Item id="no-filter" onClick={filterTodos}>All</Dropdown.Item>
            <Dropdown.Item id="inprogress-filter" onClick={filterTodos}>In Progress</Dropdown.Item>
            <Dropdown.Item id="completed-filter" onClick={filterTodos}>Completed</Dropdown.Item>
          </DropdownButton>
        </div>
        {filteredTodos ? filteredTodos.map(todo => (
          <Todo key={todo.id} todo={todo} />
        )) :
          todos.map(todo => (
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
