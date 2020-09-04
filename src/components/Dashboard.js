import React from 'react'
import { Container } from 'react-bootstrap'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const Dashboard = () => {
  return (
    <Container>
      <header>
        <h1>To Do List</h1>
      </header>
      <TodoForm />
      <TodoList />
    </Container>
  )
}

export default Dashboard
