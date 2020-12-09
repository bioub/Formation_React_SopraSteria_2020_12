import TodoForm from "../components/TodoForm";
import { connect } from "react-redux";
import { newTodoSelector } from "../store/selectors";
import { todoAdd, todoChange } from "../store/actions";

function mapStateToProps(state) {
  return {
    newTodo: newTodoSelector(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onNewTodoChange(payload) {
      dispatch(todoChange(payload));
    },
    onNewTodoSubmit(title) {
      dispatch(todoAdd(title));
    },
  };
}

const enhance = connect(mapStateToProps, mapDispatchToProps);

const TodoFormContainer = enhance(TodoForm);

export default TodoFormContainer;
