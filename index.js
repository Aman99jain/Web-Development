import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";

//reducer
function counterReducer(state = 0, action) {
  if (action.type === "INCREMENT") {
    return state + 1;
  } else if (action.type === "DECREMENT") {
    return state - 1;
  } else return state;
}

//store
const store = createStore(counterReducer);
store.subscribe(() => {
  console.log("store changed:" + JSON.stringify(store.getState()));
});

//action
function increment() {
  const action = { type: "INCREMENT" };
  store.dispatch(action);
}

function decrement() {
  const action = { type: "DECREMENT" };
  store.dispatch(action);
}
function reset(){
  const action = { type: "RESET"};
  store.dispatch(action);
}

const Counter = () => {
  let count = store.getState();
  return (
    <div>
      <h1>Counter: {count} </h1>
      <button onClick={increment}>Increment</button> &nbsp;&nbsp;
      <button onClick={decrement}>Decrement</button>
      
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
const myRender = () => root.render(<Counter />);
myRender();
store.subscribe(myRender);
