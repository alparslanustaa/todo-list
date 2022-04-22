import './App.css';
import React, { useState, useEffect } from 'react';
// importing comps
import Form from "./components/Form";
import TodoList from './components/TodoList';


function App() {
  //states
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  //USE EFFECT
  useEffect(() => {
    filterHandler();
  }, [todos, status]);


  //events and functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  return (
    <div className='App'>
      <header>
        <h1>Alparslan's Todo List</h1>
      </header>
      <Form
        setInputText={setInputText}
        setTodos={setTodos}
        inputText={inputText}
        todos={todos}
        setStatus={setStatus}
        
      />

      <TodoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>

  )
}

export default App;
