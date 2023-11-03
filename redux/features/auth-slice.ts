import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
  value: {
    isAuth: false,
    usrname: "",
    uid: "",
    isModerator: false
  }
}

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logIn: (state, action: PayloadAction<string>) => {
      return {
        value: {
          isAuth: true,
          usrname: action.payload,
          uid: "",
          isModerator: false
        }
      }
    },
    logOut: () => {
      return initialState
    }
  }
})

export const { logIn, logOut } = authSlice.actions
export default authSlice.reducer
