import { createSlice } from "@reduxjs/toolkit";

const newBookingSlice = createSlice({
    name: 'newBooking',
    initialState: {
        formData: {
            bookingDate: '',
            bookingHour: '',
            rent: '',
            racket: '',
            shuttlecock: '',
            customerName: '',
            customerWANumber: ''
        }
    },
    reducers: {
        addNewData: (state, action) => {
            const newData = action.payload
            
            state.formData = {
                ...state.formData,
                ...newData
            }
        },

        resetFormData: (state) => {
            state.formData = {
                ...state.formData,
                bookingDate: '',
                bookingHour: '',
                rent: '',
                racket: '',
                shuttlecock: '',
                customerName: '',
                customerWANumber: ''
            }
        },

        generateBookingID: (state, action) => {
            const name = state.formData.customerName.trim(' ').split(' ')[0]
            const randomNumber = String(Math.round(Math.random() * 1000) + 1000)

            state.formData.bookingID = name + randomNumber
        }
    }
})

export const { addNewData, resetFormData, generateBookingID } = newBookingSlice.actions
export const newBookingReducer = newBookingSlice.reducer