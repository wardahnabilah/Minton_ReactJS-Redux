import { useEffect, useState } from "react";
import { ScheduleCardItem } from "./ScheduleCardItem";

export function ScheduleCard({selectedDate}) {
    const [hourList, setHourList] = useState([])

    // Get the hour list
    useEffect(()=>{
        const schedule = scheduleList.find(schedule => schedule.date === selectedDate)

        if(schedule) {
            setHourList(schedule.hourList)
        }
        
    },[selectedDate])

    return (
        <div className="w-11/12 max-w-[26rem] mb-7 mx-auto px-8 pt-2 pb-6 rounded-2xl text-xl border-2 border-accent-lightpurple dark:border-accent-lightpurple/50">
            {hourList.map((hourList, index) => {
                return <ScheduleCardItem hour={hourList.hour} isBooked={hourList.isBooked} key={index} />
            })}
        </div>
    )
}

// Dummy data schedule list
const scheduleList = [
    {
        date: '10 September 2023',
        hourList: [
            {
                hour: '08:00 - 09:00',
                isBooked: false
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