import {createStore} from "redux";

const INITIAL_VALUE = {
  counter : 0,
  showAdvanceOption:false
}
const counterReducer = (store=INITIAL_VALUE,action) => {
  let newStore = store;
  if (action.type === 'INCREMENT') {
    // newStore = { counter: store.counter + 1 ,showAdvanceOption:store.showAdvanceOption};
    newStore = { ...store,counter: store.counter + 1};
  } else if (action.type === 'DECREMENT') {
    // newStore = { counter: store.counter - 1 ,showAdvanceOption:store.showAdvanceOption};
    newStore = { ...store,counter: store.counter - 1};
  } else if (action.type === 'ADD') {
    // newStore = { counter: store.counter + Number(action.payload.num) ,showAdvanceOption:store.showAdvanceOption};
    newStore = { ...store,counter: store.counter + Number(action.payload.num)};
  }
  else if (action.type === 'SUBTRACT') {
    // newStore = { counter: store.counter - Number(action.payload.num) ,showAdvanceOption:store.showAdvanceOption};
    newStore = { ...store,counter: store.counter - Number(action.payload.num)};
  }
  else if (action.type === 'SHOWADVANCE') {
    // newStore = { counter: store.counter ,showAdvanceOption:!store.showAdvanceOption};
    newStore = { ...store,showAdvanceOption:!store.showAdvanceOption};
  }
  return newStore;
}
const counterStore = createStore(counterReducer)

export default counterStore;