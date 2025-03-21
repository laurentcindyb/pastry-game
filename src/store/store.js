
import { configureStore } from '@reduxjs/toolkit';
import { patisserieApi } from '../store/api';  
import patisseriesReducer from '../store/patisseriesSlice';   
import authReducer from '../store/authSlice';  
export const store = configureStore({
  reducer: {
    patisseries: patisseriesReducer,  
    auth: authReducer,  
    [patisserieApi.reducerPath]: patisserieApi.reducer,  
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(patisserieApi.middleware),  
});
