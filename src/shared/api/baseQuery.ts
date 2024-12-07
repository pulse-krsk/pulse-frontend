import { fetchBaseQuery as RTKFetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SERVER_URL } from '../constants';
import camelize from 'camelize-ts';

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
  baseUrl: SERVER_URL,
  credentials: 'include',
  responseHandler: baseResponseHandler,
});
