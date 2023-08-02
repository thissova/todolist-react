import {combineReducers, configureStore} from "@reduxjs/toolkit";
import todolistReducer from "./todolist-reducer";

const reducers = combineReducers({
    todolist: todolistReducer
})

const store = configureStore({reducer: reducers})

export default store