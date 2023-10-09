import { createSlice } from "@reduxjs/toolkit";

const newBookingSlice = createSlice({
    name: 'newBooking',
    initialState: {
        bookingData: {
            bookingDate: '',
            bookingHour: '',
            rent: '',
            racket: '',
            shuttlecock: '',
        },
        
        currentBookingData: {
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
        addBookingData: (state, action) => {
            const bookingDetail = action.payload
            
            state.bookingData = {
                ...state.bookingData,
                ...bookingDetail
            }
        },

        updateCurrentBooking: (state, action) => {
            const updatedData = action.payload

            state.currentBookingData = {
                ...state.currentBookingData,
                ...updatedData
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

export const { addBookingData, updateCurrentBooking, resetFormData, generateBookingID } = newBookingSlice.actions
export const newBookingReducer = newBookingSlice.reducer