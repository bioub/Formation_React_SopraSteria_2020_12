function TodoForm({
  newTodo = "",
  onNewTodoChange = () => {},
  onNewTodoSubmit = () => {},
}) {
  function handleSubmit(event) {
    event.preventDefault();
    onNewTodoSubmit(newTodo);
  }

  function handleChange(event) {
    onNewTodoChange(event.target.value);
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input type="checkbox" />
      <input type="text" value={newTodo} onChange={handleChange} />
      <button>+</button>
    </form>
  );
}

export default TodoForm;
