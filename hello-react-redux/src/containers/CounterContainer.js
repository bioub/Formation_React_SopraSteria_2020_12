import Counter from '../components/Counter';
import { connect } from 'react-redux';
import { INCREMENT } from '../store/constants';

// function CounterContainer() {
//   let cpt = 10;

//   store.subscribe(() => {
//     const state = store.getState();
//     cpt = state.cpt;
//   });

//   return <Counter count={cpt} />
// }

function mapStateToProps(state) {
  return {
    count: state.cpt
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement() {
      dispatch({type: INCREMENT})
    }
  }
}

const enhance = connect(mapStateToProps, mapDispatchToProps);

const CounterContainer = enhance(Counter);

export default CounterContainer;