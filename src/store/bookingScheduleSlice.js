import { createSlice } from "@reduxjs/toolkit";

const bookingScheduleSlice = createSlice({
    name: 'bookingSchedule',
    initialState: {
        scheduleList: [
            {
                date: '10 September 2023',
                hourList: [
                    {
                        hour: '08:00 - 09:00',
                        isBooked: false
                    },
                    {
                        hour: '16:00 - 17:00',
                        isBooked: false
                    },
                    {
                        hour: '18:00 - 19:00',
                        isBooked: false
                    }
                ]
            },
            {
                date: '11 September 2023',
                hourList: [
                    {
                        hour: '08:00 - 09:00',
                        isBooked: true
                    },
                    {
                        hour: '16:00 - 17:00',
                        isBooked: false
                    },
                    {
                        hour: '18:00 - 19:00',
                        isBooked: false
                    }
                ]
            },
            {
                date: '12 September 2023',
                hourList: [
                    {
                        hour: '08:00 - 09:00',
                        isBooked: true
                    },
                    {
                        hour: '16:00 - 17:00',
                        isBooked: true
                    },
                    {
                        hour: '18:00 - 19:00',
                        isBooked: false
                    }
                ]
            },
            {
                date: '13 September 2023',
                hourList: [
                    {
                        hour: '08:00 - 09:00',
                        isBooked: false
                    },
                    {
                        hour: '16:00 - 17:00',
                        isBooked: false
                    },
                    {
                        hour: '18:00 - 19:00',
                        isBooked: false
                    }
                ]
            },
        ]
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
    }
})

export const { updateSchedule, cancelSchedule } = bookingScheduleSlice.actions
export const bookingScheduleReducer = bookingScheduleSlice.reducer