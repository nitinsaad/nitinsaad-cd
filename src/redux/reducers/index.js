import { combineReducers } from "redux";
import { buildingReducers } from "./buildingReducers";

export default combineReducers({
    buildings:buildingReducers
})