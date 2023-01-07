import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const DATA_TAG =  {
    authorId: 0,
    created: "string",
    id: 0,
    imgUrl: "string",
    locationId: 0,
    name: "string"
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
        ...result.map(({ id }) => ({ type: DATA_TAG.type, id })),
        DATA_TAG,
      ],
    }),
  }),
});


export const { useGetAllPictureQuery  } = todoPicture;