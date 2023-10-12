import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// postBooking
export const postBooking = createAsyncThunk('newBooking/postBooking', async (booking) => {
    const response = await axios({
        url: '/bookings',
        method: 'post',
        baseURL: `${process.env.REACT_APP_HOST}`,
        headers: {
            'Authorization': `Bearer ${booking.token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        data: JSON.stringify(booking.bookingData)
    })

    const data = await response.data

    return data
})

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
            customerWANumber: '',
        },

        loading: false,
        error: ''
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
    },
    extraReducers: (builder) => {
        builder
            .addCase(postBooking.pending, (state) => {
                state.loading = true
            })
            .addCase(postBooking.fulfilled, (state, action) => {
                state.loading = false
                state.currentBookingData = action.payload
            })
            .addCase(postBooking.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }
})

export const { addBookingData, updateCurrentBooking, resetFormData } = newBookingSlice.actions
export const newBookingReducer = newBookingSlice.reducer