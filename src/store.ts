import { configureStore } from "@reduxjs/toolkit";
import shadows, { shadowsStructure } from "./features/shadows";
import boxProperties, { BoxProperty } from "./features/boxProperties";

export interface RootState {
  shadows: shadowsStructure[];
  boxProperties: BoxProperty[];
}

export const store = configureStore({
  reducer: {
    shadows,
    boxProperties,
  },
});
