import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

type WareHouse = {
  wareHouse: string;
};
const initialState: WareHouse = {
  wareHouse: 'some',
};
const wareHousesSlice = createSlice({
  name: 'wareHouses',
  initialState,
  reducers: {},
  // extraReducers: builder => {},
});
export const selectWareHouses = (state: RootState): WareHouse =>
  state.wareHouses;
export default wareHousesSlice.reducer;
