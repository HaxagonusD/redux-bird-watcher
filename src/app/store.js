import { createStore, combineReducers } from "redux";
import birdReducer from "../features/birdReducer";

const store = createStore(combineReducers({ birds: birdReducer }));
store.subscribe(() => {
  console.log(store.getState());
});

export default store;
