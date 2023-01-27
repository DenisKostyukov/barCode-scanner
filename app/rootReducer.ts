import {combineReducers} from '@reduxjs/toolkit';
import wareHousesSlice from './slices/wareHousesSlice';

export const rootReducer = combineReducers({
  wareHousesState: wareHousesSlice,
});
