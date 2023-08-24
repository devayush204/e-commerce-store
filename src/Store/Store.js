import { configureStore } from "@reduxjs/toolkit";
import  sidebarReducer  from "./sidebarSlice";
import thunkMiddleware from "redux-thunk";

export const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
    },
    middleware: [thunkMiddleware],
});