import './App.css';
import React, { useState } from 'react';
// importing comps
import Form from "./components/Form";
import TodoList from './components/TodoList';
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className='App'>
      <h1>Alparslan's Todo List</h1>
      <Form setInputText={setInputText}
        setTodos={setTodos}
        inputText={inputText}
        todos={todos} />
      <TodoList/>
    </div>

  )
}

export default App;
