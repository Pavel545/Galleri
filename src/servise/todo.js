import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const DATA_TAG = { type: "Todos", id: "LIST" };


export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://test-front.framework.team",
  }),
  endpoints: (builder) => ({
    getAllPictures: builder.query({
      query: () => "paintings",
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: DATA_TAG.type, id })),
        DATA_TAG,
      ],
    }),
    getPages: builder.query({
      query: ({pages, limit}) => `paintings?_page=${pages}&_limit=${limit}`,
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: DATA_TAG.type, id })),
        DATA_TAG,
      ],
    }),
    getLocations: builder.query({
      query: () => `locations`,
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: DATA_TAG.type, id })),
        DATA_TAG,
      ],
    }),
    getAuthors: builder.query({
      query: () => `authors`,
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: DATA_TAG.type, id })),
        DATA_TAG,
      ],
    }),

  }),
});


export const {  useGetAllPicturesQuery,useGetPagesQuery,useGetLocationsQuery,useGetAuthorsQuery } = todoApi;