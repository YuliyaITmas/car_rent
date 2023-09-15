import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  favorites: [],
  filter: null,
  error: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { addToFavorites, removeFromFavorites } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
