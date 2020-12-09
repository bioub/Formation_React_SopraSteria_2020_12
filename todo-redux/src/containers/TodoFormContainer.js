import TodoForm from "../components/TodoForm";
import { connect } from "react-redux";
import { TODO_ADD, TODO_CHANGE } from "../store/constants";

function mapStateToProps(state) {
  return {
    newTodo: state.newTodo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onNewTodoChange(payload) {
      dispatch({ type: TODO_CHANGE, payload });
    },
    onNewTodoSubmit(title) {
      dispatch({
        type: TODO_ADD,
        payload: {
          id: Math.random(),
          title,
          completed: false,
        },
      });
    },
  };
}

const enhance = connect(mapStateToProps, mapDispatchToProps);

const TodoFormContainer = enhance(TodoForm);

export default TodoFormContainer;
