import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterSliceState, SortPropertyEnum, TSort } from "./types";



const initialState: FilterSliceState = {
    searchValue: "",
    currentPage: 1,
    categoryId: 0,
    sort: {
        name: "популярности",
        sortProperty: SortPropertyEnum.RATING_DESC
    },
};

export const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setCategoryId(state, action: PayloadAction<number>) {
            state.categoryId = action.payload;
        },
        setSort(state, action: PayloadAction<TSort>) {
            state.sort = action.payload;
        },
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload;
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload;
        },
        setFilters(state, action: PayloadAction<FilterSliceState>) {
            state.currentPage = Number(action.payload.currentPage);
            state.categoryId = Number(action.payload.categoryId);
            state.sort = action.payload.sort;
        },
    },
});

export const { setCategoryId, setSort, setCurrentPage, setFilters, setSearchValue } = filterSlice.actions;
export default filterSlice.reducer;