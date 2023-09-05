import { CardBody, IconButton, Tooltip } from "@material-tailwind/react"
import { DetailItem } from "../../components/elements/DetailItem"

export function BookingDetail() {
    const bookingSchedule = (
        <>
            <div className="flex gap-2 items-center">
                <CalendarIcon />
                <span>10 September 2023</span>
            </div>
            <div className="flex gap-2 items-center">
                <ClockIcon />
                <span>09.00-10.00</span>
            </div>
        </>
    )

    return (
        <section className="py-28">
            <h1 className="mb-12 text-2.5xl text-center font-extrabold uppercase tracking-wider">Booking Detail</h1>
            <div className="w-11/12 relative max-w-[26rem] mb-7 mx-auto px-6 md:px-8 pt-[2.5rem] pb-6 rounded-2xl border-2 border-accent-lightpurple dark:border-accent-lightpurple/50">
                <div className="absolute top-4 right-4">
                    <div className="inline-block">
                        <Tooltip content="Cancel Booking">
                            <IconButton variant="text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#BA0C0C" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                </svg>
                            </IconButton>
                        </Tooltip>
                    </div>
                    <div className="inline-block">
                        <Tooltip content="Edit Booking">
                            <IconButton variant="text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#39989B" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                                </svg>  
                            </IconButton>
                        </Tooltip>
                    </div>
                </div>
                <CardBody>
                    <DetailItem 
                        label="Booked by"
                        value="Alex Johnson"    
                    />
                    <DetailItem 
                        label="WA number"
                        value="081231231231"  
                    />
                    <DetailItem 
                        label="Schedule"
                        value={bookingSchedule}   
                    />
                    <DetailItem 
                        label="Booking ID"  
                    />
                    <div className="mt-[4.3rem] md:mt-[4.5rem] py-3 text-2xl text-center border-2 border-primary-dark dark:border-white rounded-full">
                        #123456
                    </div>
                </CardBody>
            </div>
        </section>
    )
}

function ClockIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
        </svg>
    )
}

function CalendarIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-event-fill" viewBox="0 0 16 16">
            <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"/>
        </svg>
    )
}