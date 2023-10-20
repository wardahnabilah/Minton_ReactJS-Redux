import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// Schedule date format (e.g. Monday, 18 September 2023)  
function scheduleDateFormat(scheduleDate) {
    const date = new Date(scheduleDate)
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }

    date.setDate(date.getDate())
    
    return date.toLocaleDateString('en-GB', options)
}

// fetchSchedules
export const fetchSchedules = createAsyncThunk('/bookingSchedule/fetchSchedules', async () => {
    const response = await axios.get(`${process.env.REACT_APP_HOST}/booking-schedules`)
    return response.data
})

// updateSchedule
export const updateSchedule = createAsyncThunk('bookingSchedule/updateSchedule', async (booking) => {
    const data = {
        bookingDate: booking.bookingDate,
        bookingHour: booking.bookingHour,
        action: 'update'
    }
    
    const response = await axios({
        url: '/booking-schedules',
        method: 'patch',
        baseURL: `${process.env.REACT_APP_HOST}`,
        headers: {
            'Authorization': `Bearer ${booking.token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        data: JSON.stringify(data)
    })

    return response.data
})

// cancelSchedule
export const cancelSchedule = createAsyncThunk('bookingSchedule/cancelSchedule', async (booking) => {
    const data = {
        bookingDate: booking.bookingDate,
        bookingHour: booking.bookingHour,
        action: 'cancel'
    }
    
    const response = await axios({
        url: '/booking-schedules',
        method: 'patch',
        baseURL: `${process.env.REACT_APP_HOST}`,
        headers: {
            'Authorization': `Bearer ${booking.token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        data: JSON.stringify(data)
    })

    return response.data
})

// Booking schedule slice
const bookingScheduleSlice = createSlice({
    name: 'bookingSchedule',
    initialState: {
        scheduleList: [],
        
        // fetchSchedule
        fetchScheduleLoading: true,
        fetchScheduleError: '',

        // updateSchedule
        updateScheduleLoading: false,
        updateScheduleStatus: '',
        updateScheduleError: '',

        // cancelSchedule
        cancelScheduleLoading: true,
        cancelScheduleError: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // fetchSchedule 
            .addCase(fetchSchedules.pending, (state) => {
                state.fetchScheduleLoading = true
            })
            .addCase(fetchSchedules.fulfilled, (state, action) => {
                const schedules =  action.payload.data
                
                state.fetchScheduleLoading = false
                state.scheduleList = schedules.map(schedule => {
                    return {
                        ...schedule,
                        dateOption: scheduleDateFormat(schedule.date)
                    }
                })
                state.error = null
            })
            .addCase(fetchSchedules.rejected, (state, action) => {
                state.fetchScheduleLoading = false
                state.fetchScheduleError = action.error.message
            })
            // updateSchedule
            .addCase(updateSchedule.pending, (state) => {
                state.updateScheduleLoading = true
            })
            .addCase(updateSchedule.fulfilled, (state, action) => {
                state.updateScheduleLoading = false
                state.updateScheduleStatus = action.payload.status
            })
            .addCase(updateSchedule.rejected, (state, action) => {
                state.updateScheduleLoading = false
                state.updateScheduleError = action.error.message
            })
            // cancelSchedule
            .addCase(cancelSchedule.pending, (state) => {
                state.cancelScheduleLoading = true
            })
            .addCase(cancelSchedule.fulfilled, (state, action) => {
                state.cancelScheduleLoading = false
                state.cancelScheduleError = null
            })
            .addCase(cancelSchedule.rejected, (state, action) => {
                state.cancelScheduleLoading = false
                state.cancelScheduleError = action.error.message
            })
    }
})

export const bookingScheduleReducer = bookingScheduleSlice.reducer