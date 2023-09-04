import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./themeSlice";
import { newBookingReducer } from "./newBookingSlice";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        newBooking: newBookingReducer
    }
})