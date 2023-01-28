import {createAsyncThunk} from '@reduxjs/toolkit';
import * as fetch from '../../api/fetchWrapper';
import {API} from '../../enum/apiPath.enum';
import {WareHouseInventoryType} from '../../types/wareHouseInventory.type';

export const getInventory = createAsyncThunk(
  `${API.inventory}`,
  async (id: number, {rejectWithValue}) => {
    try {
      return await fetch.get<WareHouseInventoryType>(`${API.inventory}/${id}`);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
