import {applyMiddleware, legacy_createStore as createStore} from 'redux'
import todoListReducer from "./reducer";
import {thunk} from "redux-thunk";

export const store = createStore(
    todoListReducer,
    applyMiddleware(thunk)
)