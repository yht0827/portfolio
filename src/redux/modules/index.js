import { combineReducers } from "redux";
import { penderReducer } from "redux-pender";
import Lang from "./Lang";

export default combineReducers({
    Lang,
    pender: penderReducer,
});
