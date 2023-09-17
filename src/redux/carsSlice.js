import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  favorites: [],
  filter: [],
  error: null,
  isLoaded: false,
  items:[],
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
    setFilter(state, action) {
      state.filter = action.payload;
    },
    resetFilter: (state) => {
      state.filter = null;
    },
    setItems(state, action) {
      state.items = action.payload
      state.isLoaded = true
    }
  },
});

export const {
  addToFavorites,
  removeFromFavorites,
  setFilter,
  resetFilter,
  setItems,
} = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
