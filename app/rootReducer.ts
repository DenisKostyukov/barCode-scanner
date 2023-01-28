import {combineReducers} from '@reduxjs/toolkit';
import wareHousesSlice from './slices/wareHousesSlice';
import inventorySlice from './slices/inventorySlice';

export const rootReducer = combineReducers({
  wareHousesState: wareHousesSlice,
  inventoryState: inventorySlice,
});
