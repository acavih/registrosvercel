import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: '',
    userInfo: {},
    logged: false
  },
  reducers: {
    login (state, {payload: {token, userInfo}}: PayloadAction<any>) {
      state.logged = true
      state.token = token
      state.userInfo = userInfo
    },
    logout (state) {
      state.logged = false
      state.token = ''
      state.userInfo = {}
    }
  }
})

export type AuthState = ReturnType<typeof authSlice.getInitialState>

export const { actions: {login, logout}, reducer: authSliceReduccer } = authSlice

export default authSliceReduccer
