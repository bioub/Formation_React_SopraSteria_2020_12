import TodoList from "../components/TodoList";
import { connect } from 'react-redux';


function mapStateToProps(state) {
  return {
    items: state.todos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    
  }
}

const enhance = connect(mapStateToProps, mapDispatchToProps);

const TodoListContainer = enhance(TodoList);

export default TodoListContainer;