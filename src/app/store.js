import { createStore, combineReducers } from "redux";
import birdReducer from "../features/birdReducer";

const store = createStore(combineReducers({ birds: birdReducer }));

export default store;
