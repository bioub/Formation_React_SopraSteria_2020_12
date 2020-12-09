import TodoFormContainer from "../containers/TodoFormContainer";
import TodoListContainer from "../containers/TodoListContainer";

function Todos() {
  return (
    <div className="Todos">
      <h2>Todos</h2>
      <TodoFormContainer />
      <TodoListContainer />
    </div>
  );
}

export default Todos;
