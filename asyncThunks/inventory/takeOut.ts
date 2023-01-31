import {createAsyncThunk} from '@reduxjs/toolkit';
import * as fetch from '../../api/fetchWrapper';
import {API} from '../../enum/apiPath.enum';
export const takeOut = createAsyncThunk(
  'takeOut',
  async (inventoryId: number, {rejectWithValue}) => {
    try {
      return await fetch.post(`${API.takeOut}/${inventoryId}`);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
