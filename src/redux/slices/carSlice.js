import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// вытащил данные и ссформировал ссылки с помощью createAsyncThunk (Business logic)
export const fetchCars = createAsyncThunk(
  "car/fetchCarsStatus",
  async (params) => {
    const { order, sortBy, category, search, currentPage } = params;
    const { data } = await axios.get(
      `https://63492c050b382d796c7f6bf1.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    return data;
  }
);

const initialState = {
  items: [],
  status: "loading", // loading  success  error
};

export const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  // логика котороя относится к асинхронным экшенам,тоесть можно более расширено описать редюсер
  extraReducers: {
    [fetchCars.pending]: (state) => {
      state.status = "loading";
      state.items = [];
    },
    [fetchCars.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [fetchCars.rejected]: (state) => {
      state.status = "error";
      state.items = [];
    },
  },
});

export const { setItems } = carSlice.actions;
export default carSlice.reducer;
