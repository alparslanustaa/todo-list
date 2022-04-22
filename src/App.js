import './App.css';
import React, { useState } from 'react';
// importing comps
import Form from "./components/Form";
import TodoList from './components/TodoList';


function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
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
      />
    </div>

  )
}

export default App;
