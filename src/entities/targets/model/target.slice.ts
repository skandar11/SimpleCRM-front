import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import type { ITarget } from '.'

export interface TargetState {
  currentTarget: ITarget | null
}

const initialState: TargetState = {
  currentTarget: null,
}

export const targetSlice = createSlice({
  name: 'target',
  initialState,
  reducers: {
    setTarget: (state, action: PayloadAction<ITarget>) => {
      state.currentTarget = action.payload
    },
    clearTarget: (state, action: PayloadAction<void>) => {
      state.currentTarget = null
    },
  },
})

// Action creators are generated for each case reducer function
export const { clearTarget, setTarget } = targetSlice.actions

export default targetSlice.reducer
