// Libraries
import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

// Typing
export interface shadow {
  inputNumber: number;
  name: string;
  value: string | number;
  type: string;
  minMax?: number[];
}

export interface shadowsStructure {
  [key: string]: any;
  id: string;
  active: boolean;
  inset: boolean;
  inputs: shadow[];
}

// Made an initial state of an item
const initialState: shadowsStructure[] = [
  {
    id: nanoid(8),
    active: true,
    inset: false,
    inputs: [
      {
        inputNumber: 1,
        name: "Horizontal offset",
        value: 0,
        type: "range",
        minMax: [-250, 250],
      },
      {
        inputNumber: 2,
        name: "Vertical offset",
        value: 10,
        type: "range",
        minMax: [-250, 250],
      },
      {
        inputNumber: 3,
        name: "Blur radius",
        value: 15,
        type: "range",
        minMax: [0, 250],
      },
      {
        inputNumber: 4,
        name: "Spread radius",
        value: -3,
        type: "range",
        minMax: [-250, 250],
      },
      {
        inputNumber: 5,
        name: "Color",
        value: "#4f4f4f",
        type: "color",
      },
    ],
  },
];

// All the functions for use items inside Redux store
export const shadowSlice = createSlice({
  name: "shadows",
  initialState,
  reducers: {
    removeShadow: (state, action) => {
      const shadowIndexToRemove = state.findIndex(
        (shadow) => shadow.id === action.payload
      );

      state.splice(shadowIndexToRemove, 1);
    },
    addShadow: (state) => {
      state.push({
        id: nanoid(8),
        active: true,
        inset: false,
        inputs: [
          {
            inputNumber: 1,
            name: "Horizontal offset",
            value: 0,
            type: "range",
            minMax: [-250, 250],
          },
          {
            inputNumber: 2,
            name: "Vertical offset",
            value: 10,
            type: "range",
            minMax: [-250, 250],
          },
          {
            inputNumber: 3,
            name: "Blur radius",
            value: 15,
            type: "range",
            minMax: [0, 250],
          },
          {
            inputNumber: 4,
            name: "Spread radius",
            value: -3,
            type: "range",
            minMax: [-250, 250],
          },
          {
            inputNumber: 5,
            name: "Color",
            value: "#4f4f4f",
            type: "color",
          },
        ],
      });
    },
    updateShadowValue: (state, action) => {
      const currentShadow = state.find(
        (shadow) => shadow.id === action.payload.shadowId
      );

      const currentInput = currentShadow?.inputs.find(
        (input) => input.inputNumber === action.payload.inputNumber
      );

      if (currentInput) {
        currentInput.value = action.payload.value;
      }
    },
    updateCheckbox: (state, action) => {
      const currentShadow = state.find(
        (shadow) => shadow.id === action.payload.shadowId
      );

      if (currentShadow) {
        if (action.payload.name === "active") {
          currentShadow.active = !currentShadow.active;
        }
        if (action.payload.name === "inset") {
          currentShadow.inset = !currentShadow.inset;
        }
      }
    },
  },
});

// Export utility functions
export const { removeShadow, addShadow, updateShadowValue, updateCheckbox } =
  shadowSlice.actions;
export default shadowSlice.reducer;
