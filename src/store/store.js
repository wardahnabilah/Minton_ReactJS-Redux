import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./themeSlice";
import { newBookingReducer } from "./newBookingSlice";
import { bookingScheduleReducer } from "./bookingScheduleSlice";
import { authReducer } from "./authSlice";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        newBooking: newBookingReducer,
        bookingSchedule: bookingScheduleReducer,
        auth: authReducer
    }
})