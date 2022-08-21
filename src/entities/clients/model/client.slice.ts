import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import type { IGetClientInfoDto } from './dto'

export interface ClientState {
  currentClient: IGetClientInfoDto | null
}

const initialState: ClientState = {
  currentClient: null,
}

export const clientSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {
    setClient: (state, action: PayloadAction<IGetClientInfoDto>) => {
      state.currentClient = action.payload
    },
    clearClient: (state, action: PayloadAction<void>) => {
      state.currentClient = null
    },
  },
})

// Action creators are generated for each case reducer function
export const { setClient, clearClient } = clientSlice.actions

export default clientSlice.reducer
