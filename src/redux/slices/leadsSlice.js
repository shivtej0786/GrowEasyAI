import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getLeads } from '../../services/api';

// opts can include query params forwarded to the API
export const fetchLeads = createAsyncThunk('leads/fetchLeads', async (opts = {}) => {
  const response = await getLeads(opts);
  return response.data;
});

const leadsSlice = createSlice({
  name: 'leads',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLeads.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLeads.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchLeads.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default leadsSlice.reducer;
