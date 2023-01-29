import {createAsyncThunk} from '@reduxjs/toolkit';
import {API} from '../../enum/apiPath.enum';
import * as fetch from '../../api/fetchWrapper';
import {
  AddInventoryType,
  InventoryType,
} from '../../types/wareHouseInventory.type';

export const addInventory = createAsyncThunk(
  `${API.addInventory}`,
  async (data: AddInventoryType, {rejectWithValue}) => {
    try {
      return await fetch.post<AddInventoryType, InventoryType>(
        `${API.addInventory}`,
        data,
      );
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
