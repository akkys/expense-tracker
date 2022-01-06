import { combineReducers, createStore } from "redux";
import expenseReducers from "../reducers/ExpenseReducers";

const initialState = {};

const reducer = combineReducers({
  expense: expenseReducers,
});

const store = createStore(reducer, initialState);

export default store;
