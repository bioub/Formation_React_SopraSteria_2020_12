import TodoItem from "./TodoItem";

function TodoList({ items = [], onDelete = () => {} }) {
  return (
    <div className="TodoList">
      {items.map((it) => (
        <TodoItem key={it.id} item={it} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default TodoList;
