import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Todos() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Acheter du pain",
      completed: true,
    },
    {
      id: 2,
      title: "Introduire Redux",
      completed: false,
    },
  ]);

  function handleNewTodoSubmit(newTodo) {
    setTodos([
      ...todos,
      {
        id: Math.random(),
        title: newTodo,
        completed: false,
      },
    ]);
    setNewTodo("");
  }

  function handleDelete(item) {
    setTodos(todos.filter((t) => t.id !== item.id));
  }

  return (
    <div className="Todos">
      <TodoForm
        newTodo={newTodo}
        onNewTodoChange={setNewTodo}
        onNewTodoSubmit={handleNewTodoSubmit}
      />
      <TodoList items={todos} onDelete={handleDelete} />
    </div>
  );
}

export default Todos;
