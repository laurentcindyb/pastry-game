// src/store/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,  // L'utilisateur est initialement null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;  // Met à jour l'utilisateur avec la donnée reçue
    },
    clearUser(state) {
      state.user = null;  // Vide l'utilisateur
    },
  },
});

// Exporter les actions pour les utiliser dans d'autres composants
export const { setUser, clearUser } = authSlice.actions;

// Exporter le reducer pour l'ajouter dans le store
export default authSlice.reducer;
