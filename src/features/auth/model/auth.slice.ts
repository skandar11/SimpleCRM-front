import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import type { IViewer } from './viewer.model'

export interface AuthState {
  accessToken: string | null

  user: IViewer | null
}

const initialState: AuthState = {
  accessToken: localStorage.getItem('access-token') || null,
  user: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IViewer>) => {
      state.user = action.payload
    },
    setTokens: (state, action: PayloadAction<{ accessToken: string }>) => {
      localStorage.setItem('access-token', action.payload.accessToken)

      state.accessToken = action.payload.accessToken
    },

    logout: (state) => {
      localStorage.clear()
      state.accessToken = null
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUser, logout, setTokens } = authSlice.actions

export default authSlice.reducer
