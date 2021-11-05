// import {createStore} from "redux";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import counterReducer from "./counter";



const reduxStore = configureStore({
    reducer: {counter: counterReducer, authentication: authReducer}
});


export default reduxStore;