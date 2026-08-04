import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '' }), // Using proxy in vite.config.js
  tagTypes: ['Product', 'Order', 'User'],
  endpoints: (builder) => ({}),
});
