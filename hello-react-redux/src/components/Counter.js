function Counter({ count, onIncrement = () => {} }) {
  function handleClick() {
    onIncrement(count + 1);
  }
  return (
    <button className="Counter" onClick={handleClick}>
      {count}
    </button>
  );
}

export default Counter;
