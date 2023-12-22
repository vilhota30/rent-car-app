import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts, getCarModel } from './operations';

const initialState = {
  favorites: [],
   modelCar: [ 
    // "Buick",
  // "Volvo",
  // "HUMMER",
  // "Subaru",
  // "Mitsubishi",
  // "Nissan",
  // "Lincoln",
  // "GMC",
  // "Hyundai",
  // "MINI",
  // "Bentley",
  // "Aston Martin",
  // "Pontiac",
  // "Lamborghini",
  // "Audi",
  // "BMW",
  // "Chevrolet",
  // "Mercedes-Benz",
  // "Chrysler",
  // "Kia",
  // "Land Rover",
  // "Ford",
  // "Telsa",
  // "Toyota"
],
  adverts: [],
  isLoading: false,
  modal: null,
  pagesEnd: false,
};

const advertSlice = createSlice({
  name: 'advert',
  initialState,
  reducers: {
    openModal(state, { payload }) {
      state.modal = payload;
    },
    closeModal(state) {
      state.modal = null;
    },
    toggleFavorite(state, { payload }) {
      const favoriteIndex = state.favorites.findIndex(
        ad => ad.id === payload.id
      );
      if (favoriteIndex !== -1) {
        state.favorites.splice(favoriteIndex, 1);
        return;
      }
      state.favorites = [...state.favorites, payload];
    },
    emptyAdvertList(state) {
      state.adverts = [];
      state.pagesEnd = false;
    },
  },
  
  extraReducers: builder => {
    builder
      .addCase(getCarModel.fulfilled, (state, { payload }) => {
        state.modelCar = payload;
      })
      .addCase(fetchAdverts.fulfilled, (state, { payload }) => {
        state.adverts = [...state.adverts, ...payload];
        if (payload.length < 3) {
          state.pagesEnd = true;
        }
        state.isLoading = false;
      })
      .addCase(fetchAdverts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAdverts.rejected, state => {
        state.isLoading = false;
      });
  },
});

export const { openModal, closeModal, toggleFavorite, emptyAdvertList } = advertSlice.actions;

export const advertsReducer = advertSlice.reducer;
