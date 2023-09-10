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
        },
        currentBookingData: {}
    },
    reducers: {
        addNewData: (state, action) => {
            const newData = action.payload
            
            state.formData = {
                ...state.formData,
                ...newData
            }

            state.currentBookingData = {
                ...state.currentBookingData,
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
            const name = state.currentBookingData.customerName.trim(' ').split(' ')[0]
            const randomNumber = String(Math.round(Math.random() * 1000) + 1000)

            state.currentBookingData.bookingID = name + randomNumber
        }
    }
})

export const { addNewData, resetFormData, generateBookingID } = newBookingSlice.actions
export const newBookingReducer = newBookingSlice.reducer