import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './store/createSlice';

function App() {
  const { count, showStar } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter : { count }</h1>
      <p>{showStar ? "*" : "not a Prime Number"}</p>
      <button aria-label='Oui' onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
}

export default App;
