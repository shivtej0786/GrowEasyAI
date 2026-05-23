import { configureStore } from '@reduxjs/toolkit';
import organizationReducer from './slices/organizationSlice';
import leadsReducer from './slices/leadsSlice';
import selectedLeadReducer from './slices/selectedLeadSlice';

export const store = configureStore({
  reducer: {
    organizations: organizationReducer,
    leads: leadsReducer,
    selectedLead: selectedLeadReducer,
  },
});
