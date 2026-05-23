import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getOrganizations } from '../../services/api';

export const fetchOrganizations = createAsyncThunk('organizations/fetchOrganizations', async () => {
  const response = await getOrganizations();
  return response.data;
});

const organizationSlice = createSlice({
  name: 'organizations',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrganizations.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchOrganizations.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchOrganizations.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default organizationSlice.reducer;
