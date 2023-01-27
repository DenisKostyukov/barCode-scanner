import {createAsyncThunk} from '@reduxjs/toolkit';
import * as fetch from '../../api/fetchWrapper';
import {WareHouseType} from '../../types/wareHouse.type';
import {API} from '../../enum/apiPath.enum';

export const getWareHouses = createAsyncThunk(
  `${API.wareHouse}`,
  async (_, {rejectWithValue}) => {
    try {
      return await fetch.get<WareHouseType[]>(`${API.wareHouse}`);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
