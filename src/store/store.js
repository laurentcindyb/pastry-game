// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import { patisserieApi } from './api';  // Ton API
import patisseriesReducer from './patisseriesSlice';  // Reducer pour les pâtisseries
import authReducer from './authSlice';  // Reducer pour l'authentification

export const store = configureStore({
  reducer: {
    patisseries: patisseriesReducer,  // Gère l'état des pâtisseries
    auth: authReducer,  // Gère l'état de l'authentification (ajouté ici)
    [patisserieApi.reducerPath]: patisserieApi.reducer,  // API pour les pâtisseries
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(patisserieApi.middleware),  // Middleware pour l'API
});
