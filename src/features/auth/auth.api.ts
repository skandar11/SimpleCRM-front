import { createApi } from '@reduxjs/toolkit/dist/query/react'
import { baseQueryWithReauth } from '@shared/api'
import type { IBaseResponse } from '@shared/types'

import type { ILoginDto, ISignupDto } from './model'
import { setTokens } from './model/auth.slice'

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['VIEWER'],
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (body: ISignupDto) => {
        return {
          url: 'auth/signup',
          method: 'POST',
          body,
        }
      },
    }),

    login: builder.mutation<IBaseResponse<any>, ILoginDto>({
      query: (body: ILoginDto) => {
        return {
          url: 'auth/login',
          method: 'POST',
          body,
        }
      },
      async onQueryStarted(body, { dispatch, queryFulfilled }) {
        try {
          const res = await queryFulfilled
          console.log(res)
          console.log(res?.data?.data)

          dispatch(
            setTokens({
              accessToken: res?.data?.data?.accessToken,
            })
          )
        } catch (error) {
          console.log(error)
        }
      },

      invalidatesTags: ['VIEWER'],
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLoginMutation, useSignupMutation } = authApi
