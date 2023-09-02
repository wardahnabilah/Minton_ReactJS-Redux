import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        isDark: true
    },
    reducers: {
        changeTheme: (state) => {
            state.isDark = !state.isDark
        }
    }
})

export const { changeTheme } = themeSlice.actions
export const themeReducer = themeSlice.reducer