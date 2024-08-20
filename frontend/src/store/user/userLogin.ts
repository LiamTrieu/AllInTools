// src/store/user.ts
import { RootState } from '@app/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'types';

const initialState: User | null = null;

const userSlice = createSlice({
  name: 'userLogin',
  initialState,
  reducers: {
    login: (state: User | null, action: PayloadAction<User>) => {
      state = action.payload;
    },
    logout: (state) => {
      state = null;
    }
  }
});

export const getUserLogin = (state: RootState) => state.userLogin;
export const { login, logout } = userSlice.actions;
export const userLogin = userSlice.reducer;
