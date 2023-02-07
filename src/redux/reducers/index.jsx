import { combineReducers } from "redux";
import ChangeCategoryReducer from "./ChangeCategoryReducers";
import { CategorylistReducer } from "./CategorylistReducer";

export const rootReducer = combineReducers({
    ChangeCategoryReducer,
    CategorylistReducer
})