// Redux/Signup/reducer.js
import {
    SET_FULL_NAME,
    SET_EMAIL,
    SET_PASSWORD,
    SET_DATE_OF_BIRTH,
    SET_GENDER,
    RESET_SIGNUP_FORM,
  } from "./actionTypes";
  
  const initialState = {
    fullName: "",
    email: "",
    password: "",
    dateOfBirth: {
      month: null,
      day: null,
      year: null,
    },
    gender: null,
  };
  
  const signupReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_FULL_NAME:
        return { ...state, fullName: action.payload };
      case SET_EMAIL:
        return { ...state, email: action.payload };
      case SET_PASSWORD:
        return { ...state, password: action.payload };
      case SET_DATE_OF_BIRTH:
        return { ...state, dateOfBirth: action.payload };
      case SET_GENDER:
        return { ...state, gender: action.payload };
      case RESET_SIGNUP_FORM:
        return initialState;
      default:
        return state;
    }
  };
  
  export default signupReducer;
  