import React from "react";
import ReactDOM from "react-dom/client";

import { createStore } from "redux";

const initialState = {
  users: [],
  products: [],
  cart: [],
  fav: [],
};

//reducer
function cartReducer(currentState = initialState, action) {
  console.log("In cartReducer: currentState:" + JSON.stringify(currentState));
  console.log("In cartReducer: action:" + JSON.stringify(action));

  if (action.type === "ADD_TO_CART") {
    console.log("Reducer: adding to cart...");
    return { ...currentState, cart: [...currentState.cart, action.payload] };
  } else if (action.type === "EMPTY_CART") {
    console.log("Reducer: empty cart...");
    return { ...currentState, cart: [] };
  }
  return currentState;
}

//store
const store = createStore(cartReducer);
store.subscribe(() => {
  console.log("Store has changed:" + JSON.stringify(store.getState()));
});
console.log("Store:" + JSON.stringify(store));

//action
console.log("dispatching action: Add to cart");
const actionAddToCart = {
  type: "ADD_TO_CART",
  payload: {
    product_id: 1,
    quantity: 10,
  },
};
store.dispatch(actionAddToCart);

console.log("dispatching action: Empty Cart");
const actionEmptyCart = {
  type: "EMPTY_CART",
};
store.dispatch(actionEmptyCart);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<h1>Hellows</h1>);
