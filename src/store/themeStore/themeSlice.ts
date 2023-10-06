import { createSlice } from '@reduxjs/toolkit'
import { themeState } from '../../types/store/storeType'



const initialState: themeState = {
  primary: "#FFFFFF",
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    themeChanger: (state: any) => {
      state.primary = "#000000"
    }
  },
})

export const { themeChanger } = themeSlice.actions
export default themeSlice.reducer