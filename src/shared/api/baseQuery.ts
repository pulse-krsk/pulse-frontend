import { fetchBaseQuery as RTKFetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SERVER_URL } from '../constants';

export const baseQuery = RTKFetchBaseQuery({
  baseUrl: SERVER_URL,
});
