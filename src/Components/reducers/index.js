import {combineReducers} from "redux";
import Data from "./data";
const reducer = combineReducers ({
    users:Data
});
export default reducer;