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

// Booking schedule slice
const bookingScheduleSlice = createSlice({
    name: 'bookingSchedule',
    initialState: {
        scheduleList: [],
        loading: true,
        error: null
    },
    reducers: {
        updateSchedule: (state, action) => {
            const { bookingDate, bookingHour} = action.payload

            state.scheduleList.forEach(schedule => {
                if(schedule.date === bookingDate) {
                    schedule.hourList.forEach(hourListItem => {
                        if(hourListItem.hour === bookingHour) {
                            hourListItem.isBooked = true
                        }
                    })
                }
            })
        },

        cancelSchedule: (state, action) => {
            const { bookingDate, bookingHour} = action.payload

            state.scheduleList.forEach(schedule => {
                if(schedule.date === bookingDate) {
                    schedule.hourList.forEach(hourListItem => {
                        if(hourListItem.hour === bookingHour) {
                            hourListItem.isBooked = false
                        }
                    })
                }
            })
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSchedules.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchSchedules.fulfilled, (state, action) => {
                const schedules =  action.payload.data
                
                state.loading = false
                state.scheduleList = schedules.map(schedule => {
                    return {
                        ...schedule,
                        dateOption: scheduleDateFormat(schedule.date)
                    }
                })
                state.error = null
            })
            .addCase(fetchSchedules.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }
})

export const { updateSchedule, cancelSchedule } = bookingScheduleSlice.actions
export const bookingScheduleReducer = bookingScheduleSlice.reducer