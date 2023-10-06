import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./reducers/sideBar_reducer";

let rootReduce = combineReducers({
    sideBar: sideBarReducer
})

let store = configureStore({ reducer: rootReduce })

export default store