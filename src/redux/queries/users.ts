import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Album, AlbumPhoto, User} from '../../utils/types/userTypes';

// Define a service using a base URL and expected endpoints
export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: builder => ({
    getAllUsers: builder.query<User[], void>({
      query: () => '/users',
    }),
    getAlbumsByUserId: builder.query<Album[], Number>({
      query: userId => `/albums?userId=${userId}`,
    }),
    getAlbumsImagesByAlbumId: builder.query<AlbumPhoto[], Number>({
      query: albumId => `/photos?albumId=${albumId}`,
    }),
    getAllImages: builder.query<AlbumPhoto[], void>({
      query: () => '/photos',
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetAlbumsByUserIdQuery,
  useGetAlbumsImagesByAlbumIdQuery,
  useGetAllImagesQuery,
} = usersApi;
