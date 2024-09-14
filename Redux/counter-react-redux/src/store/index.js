import {createStore} from "redux";

const INITIAL_VALUE = {
  counter : 0
}
const counterReducer = (store=INITIAL_VALUE,action) => {
  let newStore = store;
  if (action.type === 'Increment') {
    newStore = { counter: store.counter + 1 }
  } else if (action.type === 'Decrement') {
    newStore = { counter: store.counter - 1 };
  } else if (action.type === 'Addition') {
    newStore = { counter: store.counter + action.payload.number }
  }
  return newStore;
}
const counterStore = createStore(counterReducer)

export default counterStore;