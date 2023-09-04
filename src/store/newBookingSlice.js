import { createSlice } from "@reduxjs/toolkit";

const newBookingSlice = createSlice({
    name: 'newBooking',
    initialState: {
        formData: ''
    },
    reducers: {
        addNewData: (state, action) => {
            const newData = action.payload
            
            state.formData = {
                ...state.formData,
                ...newData
            }
        }
    }
})

export const { addNewData } = newBookingSlice.actions
export const newBookingReducer = newBookingSlice.reducer