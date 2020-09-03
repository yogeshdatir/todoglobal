import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { Container } from 'react-bootstrap';

function App() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState({})

  return (
    <Container>
      <header>
        <h1>To Do List</h1>
      </header>
      <TodoForm todos={todos} setTodos={setTodos} newTodo={newTodo} setNewTodo={setNewTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </Container>
  );
}

export default App;
