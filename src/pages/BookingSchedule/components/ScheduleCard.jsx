import { ScheduleCardItem } from "./ScheduleCardItem";

export function ScheduleCard() {
    return (
        <div className="w-11/12 max-w-[26rem] mb-7 mx-auto px-8 pt-2 pb-6 rounded-2xl text-xl border-2 border-accent-lightpurple dark:border-accent-lightpurple/50">
            <ScheduleCardItem />
            <ScheduleCardItem />
        </div>
    )
}