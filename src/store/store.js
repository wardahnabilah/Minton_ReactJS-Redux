import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./themeSlice";
import { newBookingReducer } from "./newBookingSlice";
import { bookingScheduleReducer } from "./bookingScheduleSlice";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        newBooking: newBookingReducer,
        bookingSchedule: bookingScheduleReducer
    }
})