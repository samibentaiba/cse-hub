// Redux/Signup/action.js
import {
    SET_FULL_NAME,
    SET_EMAIL,
    SET_PASSWORD,
    SET_DATE_OF_BIRTH,
    SET_GENDER,
    RESET_SIGNUP_FORM,
  } from "./actionTypes";
  
  // Action creators for updating signup form fields
  export const setFullName = (fullName) => ({
    type: SET_FULL_NAME,
    payload: fullName,
  });
  
  export const setEmail = (email) => ({
    type: SET_EMAIL,
    payload: email,
  });
  
  export const setPassword = (password) => ({
    type: SET_PASSWORD,
    payload: password,
  });
  
  export const setDateOfBirth = (dateOfBirth) => ({
    type: SET_DATE_OF_BIRTH,
    payload: dateOfBirth,
  });
  
  export const setGender = (gender) => ({
    type: SET_GENDER,
    payload: gender,
  });
  
  // Action to reset the form
  export const resetSignupForm = () => ({
    type: RESET_SIGNUP_FORM,
  });
  