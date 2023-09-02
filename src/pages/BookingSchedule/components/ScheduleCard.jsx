import { ScheduleCardItem } from "./ScheduleCardItem";

export function ScheduleCard() {
    return (
        <div className="min-w-[22rem] max-w-[26rem] w-4/12 mb-7 mx-auto px-8 pt-2 pb-6 rounded-2xl text-xl border-2 border-accent-lightpurple/50">
            <ScheduleCardItem />
            <ScheduleCardItem />
        </div>
    )
}