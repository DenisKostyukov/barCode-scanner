import {createAsyncThunk} from '@reduxjs/toolkit';
import {MoveItemType} from '../../types/wareHouseInventory.type';
import * as fetch from '../../api/fetchWrapper';
import {API} from '../../enum/apiPath.enum';
export const moveItem = createAsyncThunk(
  'moveItem',
  async (data: MoveItemType, {rejectWithValue}) => {
    try {
      return await fetch.post(`${API.moveItem}`, data);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
