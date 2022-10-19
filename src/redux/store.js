import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import cart from "./slices/cartSlice";
import car from "./slices/carSlice";

export const store = configureStore({
  reducer: {
    filter,
    cart,
    car,
  },
});
