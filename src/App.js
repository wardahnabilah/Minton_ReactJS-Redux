import { Header } from "./components/layouts/Header/Header"
import { Footer } from "./components/layouts/Footer/Footer"
import { Routes, Route } from "react-router-dom"
import { Homepage } from "./pages/Home/Homepage"
import { CreateBooking } from "./pages/CreateBooking/CreateBooking"
import { BookingSchedule } from "./pages/BookingSchedule/BookingSchedule"
import { BookingSuccess } from "./pages/BookingSuccess/BookingSuccess"

export function App() {
    return(
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="relative min-h-screen dark:bg-primary-dark text-primary-dark dark:text-white">
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/create-booking" element={<CreateBooking />} />
                    <Route path="/booking-schedule" element={<BookingSchedule />} />
                    <Route path="/booking-success" element={<BookingSuccess />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}