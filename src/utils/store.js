import { configureStore } from "@reduxjs/toolkit";
import moviesListReducer from "./reducers/moviesListReducer.js";

const store = configureStore({
  reducer: moviesListReducer,
});
export default store;
