import { createSlice } from "@reduxjs/toolkit";

// Generate schedule dates 
function scheduleDate(n) {
    const date = new Date()
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }

    date.setDate(date.getDate() + n)
    
    return date.toLocaleDateString('en-GB', options)
}


const bookingScheduleSlice = createSlice({
    name: 'bookingSchedule',
    initialState: {
        scheduleList: [
            {
                date: scheduleDate(1),
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
                date: scheduleDate(2),
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
                date: scheduleDate(3),
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
                date: scheduleDate(4),
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