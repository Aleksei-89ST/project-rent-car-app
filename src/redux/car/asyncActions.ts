import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SearchCarParams } from "./slice";
import { Cars } from "./types";

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
  