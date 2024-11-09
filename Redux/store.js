// Redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "./Signup/reducer";

const store = configureStore({
  reducer: {
    signup: signupReducer,
  },
});

export default store;
