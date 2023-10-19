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

// deleteBooking
export const deleteBooking = createAsyncThunk('newBooking/deleteBooking', async (booking) => {
    const response = await axios({
        url: `/bookings/${booking.bookingId}`,
        method: 'delete',
        baseURL: `${process.env.REACT_APP_HOST}`,
        headers: {
            'Authorization': `Bearer ${booking.token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    })

    return response.data
})

// patchBooking
export const patchBooking = createAsyncThunk('newBooking/patchBooking', async ({currentBookingData, token}) => {
    const response = await axios({
        url: `bookings/${currentBookingData.bookingId}`,
        method: 'patch',
        baseURL: `${process.env.REACT_APP_HOST}`,
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        data: JSON.stringify(currentBookingData)
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
        currentBookingData: {},

        loading: false,
        error: '',

        // patchBooking
        patchBookingLoading: false,
        patchBookingStatus: '',
        patchBookingError: ''
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
            state.bookingData = {
                ...state.bookingData,
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
            // postBooking
            .addCase(postBooking.pending, (state) => {
                state.loading = true
            })
            .addCase(postBooking.fulfilled, (state, action) => {
                state.loading = false
                state.currentBookingData = action.payload.data
            })
            .addCase(postBooking.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })

            // patchBooking
            .addCase(patchBooking.pending, (state) => {
                state.patchBookingLoading = true
            })
            .addCase(patchBooking.fulfilled, (state, action) => {
                state.patchBookingLoading = false
                state.patchBookingStatus = action.payload.status
                state.currentBookingData = action.payload.data
            })
            .addCase(patchBooking.rejected, (state, action) => {
                state.patchBookingLoading = false
                state.patchBookingError = action.error.message
            })
    }
})

export const { addBookingData, updateCurrentBooking, resetFormData } = newBookingSlice.actions
export const newBookingReducer = newBookingSlice.reducer