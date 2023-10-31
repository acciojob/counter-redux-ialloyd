
import React from "react";
import './../styles/App.css';
import { increment, decrement } from "../redux/actions/counterAction";
import { useSelector, useDispatch } from "react-redux";

const App = () => {

  const counter = useSelector(state => state)

  const dispatch = useDispatch()

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  )
}

export default App
