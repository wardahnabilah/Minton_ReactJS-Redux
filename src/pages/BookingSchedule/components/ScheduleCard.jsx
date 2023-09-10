import { useEffect, useState } from "react";
import { ScheduleCardItem } from "./ScheduleCardItem";
import { useSelector } from "react-redux";

export function ScheduleCard({selectedDate}) {
    const [hourList, setHourList] = useState([])
    const { scheduleList } = useSelector(state=>state.bookingSchedule)

    // Get the hour list
    useEffect(()=>{
        const schedule = scheduleList.find(schedule => schedule.date === selectedDate)

        if(schedule) {
            setHourList(schedule.hourList)
        }
        
    },[selectedDate, scheduleList])

    return (
        <div className="w-11/12 max-w-[26rem] mb-7 mx-auto px-8 pt-2 pb-6 rounded-2xl text-xl border-2 border-accent-lightpurple dark:border-accent-lightpurple/50">
            {hourList.map((hourItem, index) => {
                return <ScheduleCardItem hour={hourItem.hour} isBooked={hourItem.isBooked} key={index} />
            })}
        </div>
    )
}