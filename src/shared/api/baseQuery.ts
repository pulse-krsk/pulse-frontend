import { fetchBaseQuery as RTKFetchBaseQuery } from '@reduxjs/toolkit/query/react';
import camelize from 'camelize-ts';
import { BASE_API_URL } from './constants';

export const baseResponseHandler = async (response: Response) => {
  if (response.ok) {
    const data = await response.json();
    const camelData = camelize(data);
    return camelData;
  } else {
    const error = await response.json();
    return Promise.reject(error);
  }
};

export const baseQuery = RTKFetchBaseQuery({
  baseUrl: BASE_API_URL,
  credentials: 'include',
  mode: 'no-cors',
  responseHandler: baseResponseHandler,
});
