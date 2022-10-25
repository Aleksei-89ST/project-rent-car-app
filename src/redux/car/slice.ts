import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCars } from "./asyncActions";
import { Cars, CarSliceState, Status } from "./types";

const initialState: CarSliceState = {
    items: [],
    status: Status.LOADING,
  };
  
  export type SearchCarParams = {
    order: string;
    sortBy: string;
    category: string;
    search: string;
    currentPage: string;
  }
  
  export const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {
      setItems(state, action: PayloadAction<Cars[]>) {
        state.items = action.payload;
      },
    },
    // логика котороя относится к асинхронным экшенам,тоесть можно более расширено описать редюсер
    extraReducers: (buider) => {
      buider.addCase(fetchCars.pending, (state, action) => {
        state.status = Status.LOADING;
        state.items = [];
      });
  
      buider.addCase(fetchCars.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = Status.SUCCESS;
      });
  
      buider.addCase(fetchCars.rejected, (state, action) => {
        state.status = Status.ERROR;
        state.items = [];
      });
    },
  });
  
export const { setItems } = carSlice.actions;
export default carSlice.reducer;
