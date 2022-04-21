import Todo from "./Todo";
import React from "react";

const TodoList = () => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      </ul>
    </div>
  );
}

export default TodoList;