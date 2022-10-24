import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

type Cars = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: string[];
  types: number[];
  rating: number;
};
export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
};
const initialState: CarSliceState = {
  items: [],
  status: Status.LOADING,
};
interface CarSliceState {
  items: Cars[];
  status: Status;
};

export type SearchCarParams = {
  order: string;
  sortBy: string;
  category: string;
  search: string;
  currentPage: string;
}

// вытащил данные и ссформировал ссылки с помощью createAsyncThunk (Business logic)
export const fetchCars = createAsyncThunk(
  "car/fetchCarsStatus",
  async (params: SearchCarParams) => {
    const { order, sortBy, category, search, currentPage } = params;
    const { data } = await axios.get<Cars[]>(
      `https://63492c050b382d796c7f6bf1.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    return data as Cars[];
  }
);

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

export const CarsSelectData = (state: RootState) => state.car;

export const { setItems } = carSlice.actions;
export default carSlice.reducer;
