import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getLeadDetails } from '../../services/api';

export const fetchLeadDetails = createAsyncThunk('selectedLead/fetchLeadDetails', async (id) => {
  const response = await getLeadDetails(id);
  
  const payload = response.data;
  if (payload && payload.data && payload.data.lead) {
    return payload.data.lead;
  }
  if (payload && payload.lead) {
    return payload.lead;
  }
  return payload;
});

const selectedLeadSlice = createSlice({
  name: 'selectedLead',
  initialState: {
    data: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    clearSelectedLead: (state) => {
      state.data = null;
      state.status = 'idle';
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLeadDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLeadDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchLeadDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { clearSelectedLead } = selectedLeadSlice.actions;
export default selectedLeadSlice.reducer;
