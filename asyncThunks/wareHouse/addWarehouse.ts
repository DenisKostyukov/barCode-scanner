import {createAsyncThunk} from '@reduxjs/toolkit';
import {API} from '../../enum/apiPath.enum';
import * as fetch from '../../api/fetchWrapper';

export const addWarehouse = createAsyncThunk(
  'add warehouse',
  async (data: any, {rejectWithValue}) => {
    try {
      return await fetch.post(`${API.wareHouse}`, data);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
