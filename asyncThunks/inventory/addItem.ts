import {createAsyncThunk} from '@reduxjs/toolkit';
import {API} from '../../enum/apiPath.enum';
import * as fetch from '../../api/fetchWrapper';
import {AddItemType, InventoryItem} from '../../types/wareHouseInventory.type';

export const addItem = createAsyncThunk(
  `${API.item}`,
  async (data: AddItemType, {rejectWithValue}) => {
    try {
      return await fetch.post<AddItemType, InventoryItem>(`${API.item}`, data);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
