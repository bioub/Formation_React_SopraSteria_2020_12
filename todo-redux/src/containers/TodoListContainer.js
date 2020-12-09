import TodoList from "../components/TodoList";
import { connect } from 'react-redux';
import { todosSelector } from "../store/selectors";


function mapStateToProps(state) {
  return {
    items: todosSelector(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

const enhance = connect(mapStateToProps, mapDispatchToProps);

const TodoListContainer = enhance(TodoList);

export default TodoListContainer;
