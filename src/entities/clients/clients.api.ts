import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReauth } from '@shared/api'
import type { IBaseResponse } from '@shared/types'

import type {
  IDeleteClientDto,
  IGetAllClientsInfoDto,
  IGetClientInfoDto,
  IGetClientInfoRequest,
  IPostClientInfoDto,
  IPutClientInfoDto,
} from './model'
import type { ICreateClientDto } from './model/dto/create-client.dto'
// Define a service using a base URL and expected endpoints
export const clientsApi = createApi({
  reducerPath: 'clientsApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['CLIENTS'],
  endpoints: (builder) => ({
    postClientInfo: builder.mutation<any, IPostClientInfoDto>({
      query: (body) => {
        return {
          url: 'client-info/',
          method: 'POST',
          body,
        }
      },
      invalidatesTags: ['CLIENTS'],
      transformResponse: (res: IBaseResponse<any>) => {
        return res.data
      },
    }),
    getAllClientsInfo: builder.query<IGetAllClientsInfoDto, void>({
      query: () => {
        return {
          url: `client-info/all`,
          method: 'GET',
        }
      },
      transformResponse: (res: IBaseResponse<IGetAllClientsInfoDto>) => {
        return res.data
      },
      providesTags: ['CLIENTS'],
    }),
    getClientInfo: builder.query<IGetClientInfoDto, IGetClientInfoRequest>({
      query: (arguments_) => {
        return {
          url: `client-info/one/${arguments_.id}`,
          method: 'GET',
        }
      },
      transformResponse: (res: IBaseResponse<IGetClientInfoDto>) => {
        return res.data
      },
      providesTags: ['CLIENTS'],
    }),

    deleteClient: builder.mutation<any, IDeleteClientDto>({
      query: (arguments_) => {
        return {
          url: `client-info/${arguments_.id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: ['CLIENTS'],
      transformResponse: (res: IBaseResponse<any>) => {
        return res.data
      },
    }),
    editClient: builder.mutation<any, IPutClientInfoDto>({
      query: (body) => {
        return {
          url: `client-info/${body.id}/`,
          method: 'PUT',
          body: body.body,
        }
      },
      invalidatesTags: ['CLIENTS'],
      transformResponse: (res: IBaseResponse<any>) => {
        return res.data
      },
    }),
    createClient: builder.mutation<any, ICreateClientDto>({
      query: (body) => {
        return {
          url: `auth/create-client`,
          method: 'POST',
          body,
        }
      },
      invalidatesTags: ['CLIENTS'],
      transformResponse: (res: IBaseResponse<any>) => {
        return res.data
      },
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllClientsInfoQuery,
  usePostClientInfoMutation,
  useCreateClientMutation,
  useEditClientMutation,
  useGetClientInfoQuery,
} = clientsApi
