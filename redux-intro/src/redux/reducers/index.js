import { combineReducers } from "redux";
import counterReducer from "./counterReducer";

const reducers = combineReducers({
    counterReducer // is equal to counterReducer: counterReducer, creating object with same name
})

export default reducers