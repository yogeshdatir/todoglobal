import React, { useState, useEffect } from 'react'
import { ListGroup, DropdownButton, Dropdown } from 'react-bootstrap'
import Todo from './Todo'
import { connect } from 'react-redux'
import { getTodos, filterTodos } from '../actions/todoActions'

const TodoList = ({ todos, filteredTodos, getTodos, filterTodos }) => {
  const [selectedFilter, setSelectedFilter] = useState("Filter")

  useEffect(() => {
    const test = async () => {
      await getTodos()
    }
    test()
  }, [getTodos])

  const handleFilter = (e) => {
    setSelectedFilter(e.target.innerText)
    switch (e.target.id) {
      case "no-filter":
        filterTodos("status", '')
        break
      case "inprogress-filter":
        filterTodos("status", 0)     
        break
      case "completed-filter": 
        filterTodos("status", 1)
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
            <Dropdown.Item id="no-filter" onClick={handleFilter}>All</Dropdown.Item>
            <Dropdown.Item id="inprogress-filter" onClick={handleFilter}>In Progress</Dropdown.Item>
            <Dropdown.Item id="completed-filter" onClick={handleFilter}>Completed</Dropdown.Item>
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
  todos: state.todoReducer.todos,
  filteredTodos: state.todoReducer.filteredTodos
})

export default connect(mapStateToProps, { getTodos, filterTodos })(TodoList)
