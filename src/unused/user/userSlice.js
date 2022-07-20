import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user : { }
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state, { payload }) {
        state.user = payload;
    }
  },
})

export const { addUser } = userSlice.actions
export default userSlice.reducer;

export const getuser = (state) => state.user.user;