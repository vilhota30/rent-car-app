import { createSlice } from "@reduxjs/toolkit";
import { fetchDataCars } from "./operations";

const handleStatusPending = state => {
    state.isLoading = true;
};

const handleStatusRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const handleStatusFulfilled = state => {
    state.isLoading = false;
    state.error = null;
}
 

const carSlice = createSlice({
    name: "cars",
    initialState: {
      favorite: [],
      isLoading: false,
      error: null,
    },

    extraReducers: {
    [fetchDataCars.pending]: handleStatusPending,

    [fetchDataCars.fulfilled] (state, action) {
     handleStatusFulfilled(state);
     state.favorite = action.payload;
    },
    
    [fetchDataCars.rejected]: handleStatusRejected,

    },
})

export default carSlice;