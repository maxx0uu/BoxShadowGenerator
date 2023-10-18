// Libraries
import { createSlice } from "@reduxjs/toolkit";

// Typing
export interface BoxProperty {
  inputNumber: number;
  name: string;
  value: string | number;
  type: string;
  slice: string;
  minMax?: [number, number];
}

// Made an initial state of an item
const initialState: BoxProperty[] = [
  {
    inputNumber: 1,
    name: "Border radius",
    value: 25,
    type: "range",
    slice: "boxProperties",
    minMax: [0, 250],
  },
  {
    inputNumber: 2,
    name: "Height",
    value: 250,
    type: "range",
    slice: "boxProperties",
    minMax: [0, 500],
  },
  {
    inputNumber: 3,
    name: "Width",
    value: 250,
    type: "range",
    slice: "boxProperties",
    minMax: [0, 500],
  },
  {
    inputNumber: 5,
    name: "Background color",
    value: "#fff",
    type: "color",
    slice: "boxProperties",
  },
];

// All the functions for use items inside Redux store
export const boxSlice = createSlice({
  name: "shadows",
  initialState,
  reducers: {
    updateBoxValue: (state, action) => {
      const box = state.find(
        (el) => el.inputNumber === action.payload.inputNumber
      );
      if (box) {
        box.value = action.payload.value;
      }
    },
  },
});

// Export utily functions
export const { updateBoxValue } = boxSlice.actions;
export default boxSlice.reducer;
