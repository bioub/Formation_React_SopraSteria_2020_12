function TodoItem({ item = {}, onDelete = () => {} }) {
  function handleClick() {
    onDelete(item);
  }

  return (
    <div className="TodoItem">
      <input type="checkbox" defaultChecked={item.completed} />
      <span>{item.title}</span>
      <button onClick={handleClick}>-</button>
    </div>
  );
}

export default TodoItem;
