import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    registrationForm: null,
  },
  reducers: {
    setRegistrationForm: (state, action) => {
      state.registrationForm = action.payload; 
    },
  },
});

export const { setRegistrationForm } = appSlice.actions;

export const selectRegistrationForm= (state) => state.app.registrationForm; //so from state(onion) to the appslice to registrationForm

export default appSlice.reducer;