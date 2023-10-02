import { useEffect, useState } from "react";
import { useDocTitle } from "../../hooks/useDocTitle";
import { ScheduleCard } from "./components/ScheduleCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchSchedules } from "../../store/bookingScheduleSlice";

export function BookingSchedule() {
    const [selectedDate, setSelectedDate] = useState('') 
    const [dateOptions, setDateOptions] = useState([])
    const { scheduleList, loading } = useSelector(state=>state.bookingSchedule)
    const dispatch = useDispatch()
    
    useDocTitle('Booking Schedule')

    // Get booking schedules from API
    useEffect(()=>{
        dispatch(fetchSchedules())
    }, [dispatch])

    // Get the date options from bookingSchedule slice
    useEffect(()=>{
        if(!loading) {
            const dates = scheduleList.map(schedule => schedule.date)
            
            setDateOptions(dates)
        }
    },[scheduleList, loading])
    
    // Handle select date
    function handleSelectedDate(event) {
        const date = event.target.value

        setSelectedDate(date)
    }

    return (
        <section className="py-32">
            <h1 className="text-2.5xl text-center font-extrabold uppercase tracking-wider">Booking Schedule</h1>
            <div className="relative w-11/12 xsm:w-10/12 max-w-[26rem] mx-auto mt-16 mb-9 border-b-4 border-b-primary-dark dark:border-b-white">
                <select onChange={handleSelectedDate} value={selectedDate} className="w-full pb-3 tracking-[0.3em] text-sm xsm:text-base md:text-lg font-bold uppercase bg-transparent hover:cursor-pointer focus:outline-none appearance-none">
                    <option disabled value="" className="bg-primary-light dark:bg-primary-dark capitalize">Select a Date</option>
                    { dateOptions.map((date, index) => {
                        return <option value={date} key={index} className="bg-primary-light dark:bg-primary-dark capitalize">{date}</option>
                    }) }
                </select>
                <svg className="absolute top-[0.125rem] right-0 fill-current pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.939 7.939 12 12.879l-4.939-4.94-2.122 2.122L12 17.121l7.061-7.06z"></path></svg>   
            </div>
            {/* Schedule Result*/}
            {selectedDate && <ScheduleCard selectedDate={selectedDate} />}  
        </section>       
    )
}