export function ScheduleCardItem() {
    return (
        <div className="flex justify-between items-center px-2 py-3.5 border-b-2 border-primary-dark/30 dark:border-white/50">
            <span className="flex-1 text-center">08:00 - 09:00</span>
            <span className="flex-1 min-w-[5rem] mx-2 py-1 text-base text-center text-white bg-accent-darkgrey rounded-full">Booked</span>
        </div>
    )
}