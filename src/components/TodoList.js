import Todo from "./Todo";
import React from "react";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            key={todo.id}
            todo={todo}
            text={todo.text} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;