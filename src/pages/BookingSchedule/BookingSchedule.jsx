import { ScheduleCard } from "./components/ScheduleCard";

export function BookingSchedule() {
    return (
        <main className="min-h-screen py-32 dark:bg-primary-dark text-primary-dark dark:text-white">
            <h1 className="text-2.5xl text-center font-extrabold uppercase tracking-wider">Booking Schedule</h1>
            <div className="relative w-[22rem] mx-auto mt-16 mb-9 border-b-4 border-b-primary-dark dark:border-b-white">
                <select className="w-full pb-3 tracking-[0.3em] text-sm font-bold uppercase bg-transparent hover:cursor-pointer focus:outline-none appearance-none">
                    <option value="" className="bg-primary-dark capitalize">Choose A Date</option>
                    <option value="" className="bg-primary-dark capitalize">Sunday, 31 September 2023</option>
                </select>
                <svg className="absolute top-[0.125rem] right-0 fill-current pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.939 7.939 12 12.879l-4.939-4.94-2.122 2.122L12 17.121l7.061-7.06z"></path></svg>   
            </div>
            {/* Schedule Result*/}
            <ScheduleCard  />  
        </main>       
    )
}