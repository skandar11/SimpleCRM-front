import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '@shared/api'
import type { IBaseResponse } from '@shared/types'

import type { IAddTargetDto } from './model/dto/add-target.dto'
import type { IDeleteTargetDto } from './model/dto/delete-target.dto'
import type { IEditTargetDto } from './model/dto/edit-target.dto'
import type { IGetAllTargetsDto } from './model/dto/get-all-targets.dto'
// Define a service using a base URL and expected endpoints
export const targetsApi = createApi({
  reducerPath: 'targetsApi',
  baseQuery,
  tagTypes: ['TARGETS'],
  endpoints: (builder) => ({
    addTarget: builder.mutation<any, IAddTargetDto>({
      query: (body) => {
        return {
          url: 'targets/',
          method: 'POST',
          body,
        }
      },
      invalidatesTags: ['TARGETS'],
      transformResponse: (res: IBaseResponse<any>) => {
        return res.data
      },
    }),
    getAllTargetsByUser: builder.query<IGetAllTargetsDto, { id: string }>({
      query: (arguments_) => {
        return {
          url: `targets/all/${arguments_.id}`,
          method: 'GET',
        }
      },
      transformResponse: (res: IBaseResponse<IGetAllTargetsDto>) => {
        return res.data
      },
      providesTags: ['TARGETS'],
    }),
    editTarget: builder.mutation<any, IEditTargetDto>({
      query: (arguments_) => {
        return {
          url: `targets/${arguments_.id}`,
          method: 'PUT',
          body: arguments_.body,
        }
      },
      transformResponse: (res: IBaseResponse<any>) => {
        return res.data
      },
      invalidatesTags: ['TARGETS'],
    }),

    deleteTarget: builder.mutation<any, IDeleteTargetDto>({
      query: (arguments_) => {
        return {
          url: `targets/${arguments_.id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: ['TARGETS'],
      transformResponse: (res: IBaseResponse<any>) => {
        return res.data
      },
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useAddTargetMutation,
  useGetAllTargetsByUserQuery,
  useEditTargetMutation,
  useDeleteTargetMutation,
} = targetsApi
