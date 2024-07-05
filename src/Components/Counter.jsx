export default function Counter({ count, handleCountButtonClick, oneCounter }) {
  return (
    <>
      <h3>The current Counter is: {count}</h3>
      <button onClick={() => handleCountButtonClick(true)}>+</button>
      <button onClick={() => handleCountButtonClick(false)}>-</button>
      <button onClick={() => oneCounter(true)}>X close</button>
    </>
  );
}
