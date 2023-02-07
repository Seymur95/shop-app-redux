import { combineReducers } from "redux";
import ChangeCategoryReducer from "./ChangeCategoryReducers";
import { CategorylistReducer } from "./CategorylistReducer";
import ProductlistReducer from './ProductlistReducer'

export const rootReducer = combineReducers({
    ChangeCategoryReducer,
    CategorylistReducer,
    ProductlistReducer
})