import axios from './axios';
import { mockOrganizationsResponse, mockLeadsResponse, mockLeadDetailsResponse } from './mockApiData';

const useMockFallback = async (requestFn, mockValue) => {
  // If explicitly requested to use mock API, bypass the network call
  if (process.env.NEXT_PUBLIC_USE_MOCK_API === 'true') {
    return typeof mockValue === 'function' ? mockValue() : mockValue;
  }

  try {
    const response = await requestFn();
    if (response && response.data) {
      return response;
    }
    throw new Error('Invalid API response structure');
  } catch (error) {
    return typeof mockValue === 'function' ? mockValue() : mockValue;
  }
};

export const getOrganizations = () => {
  return useMockFallback(() => axios.get('/users/organisations'), { data: mockOrganizationsResponse });
};

// opts can include query params like limit, created_from, created_to, status
export const getLeads = (opts = {}) => {
  return useMockFallback(
    () => axios.get('/org/leads', { params: opts }),
    { data: mockLeadsResponse }
  );
};

export const getLeadDetails = (id) => {
  return useMockFallback(() => axios.get(`/org/leads/${id}`), () => ({ data: mockLeadDetailsResponse(id) }));
};
