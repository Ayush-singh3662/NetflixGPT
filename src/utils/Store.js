import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";

const Store = configureStore({
    reducer: {
        user: userReducer,
        movies: movieReducer
    },
});

export default Store;