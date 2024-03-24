import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Radio } from "../../types";

interface RadioState {
  currentRadio: Radio | null;
}

const initialState: RadioState = {
  currentRadio: null,
};

const radioSlice = createSlice({
  name: "radio",
  initialState,
  reducers: {
    setCurrentRadio: (state, action: PayloadAction<Radio>) => {
      state.currentRadio = action.payload;
    },
  },
});

export const { setCurrentRadio } = radioSlice.actions;
// selector function to retrieve the currently playing radio from the store
export const selectCurrentRadio = (state: { radio: RadioState }) =>
  state.radio.currentRadio;
export default radioSlice.reducer;
