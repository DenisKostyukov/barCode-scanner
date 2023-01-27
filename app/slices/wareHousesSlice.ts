import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {WareHouseType} from '../../types/wareHouse.type';
import {getWareHouses} from '../../asyncThunks/wareHouse/getWareHouses';

type WareHouseState = {
  wareHouses: WareHouseType[];
  loading: string;
  error: object;
};
const initialState: WareHouseState = {
  wareHouses: [],
  loading: 'idle',
  error: {},
};
const wareHousesSlice = createSlice({
  name: 'wareHouses',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getWareHouses.pending, state => {
        state.loading = 'pending';
      })
      .addCase(
        getWareHouses.fulfilled,
        (state, action: PayloadAction<WareHouseType[]>) => {
          state.loading = 'idle';
          state.wareHouses = action.payload;
        },
      )
      .addCase(getWareHouses.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error;
      });
  },
});
export const selectWareHouses = (state: RootState): WareHouseState =>
  state.wareHousesState;
export default wareHousesSlice.reducer;
