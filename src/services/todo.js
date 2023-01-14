import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const DATA_TAG = {
  authorId: 0,
  created: "string",
  id: 0,
  imgUrl: "string",
  locationId: 0,
  name: "string",
};
const SORT = {
  id: 0,
  name: "string",
};

export const todoPicture = createApi({
  reducerPath: "todoPicture",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://test-front.framework.team",
  }),
  endpoints: (builder) => ({
    getAllPicture: builder.query({
      query: () => "paintings",
      providesTags: (result = []) => [
        ...result.map(() => ({ type: DATA_TAG.type })),
        DATA_TAG,
      ],
    }),
    getPageLimit: builder.query({
      query: ({ pages, limit }) => `paintings?_page=${pages}&_limit=${limit}`,
      providesTags: (result = []) => [
        ...result.map(() => ({ type: DATA_TAG.type })),
        DATA_TAG,
      ],
    }),
    getAllAuthors: builder.query({
      query: () => "authors",
      providesTags: (result = []) => [
        ...result.map(() => ({ type: SORT.type })),
        SORT,
      ],
    }),
    getLocations: builder.query({
      query: () => "locations",
      providesTags: (result = []) => [
        ...result.map(() => ({ type: SORT.type })),
        SORT,
      ],
    }),
  }),
});

export const {
  useGetAllPictureQuery,
  useGetPageLimitQuery,
  useGetAllAuthorsQuery,
  useGetLocationsQuery,
} = todoPicture;
