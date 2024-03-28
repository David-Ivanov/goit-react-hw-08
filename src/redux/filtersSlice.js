import { createSlice } from "@reduxjs/toolkit"

const initialFilterValue = {
    filters: {
        name: ""
    }
}

const filtersSlice = createSlice({
    name: "filters",
    initialState: initialFilterValue,
    reducers: {
        changeFilter(state, action) {
            state.filters.name = action.payload
        }
    }
});

const filtersReducer = filtersSlice.reducer;
export default filtersReducer;

export const { changeFilter } = filtersSlice.actions;

export const selectNameFilter = state => state.filter.filters.name;