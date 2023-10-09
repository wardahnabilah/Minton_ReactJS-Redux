import { Card, CardBody, CardHeader, CardFooter } from "@material-tailwind/react"
import { ButtonLink } from "../../components/elements/Buttons"
import { useSelector } from "react-redux"
import { useDocTitle } from "../../hooks/useDocTitle"

export function BookingSuccess() {
    const { currentBookingData } = useSelector(state=>state.newBooking)

    useDocTitle('Booking Success')
    
    return (
        <section className="py-28">
            <Card color="blue-gray" variant="gradient" className="w-11/12 py-4 md:py-12 max-w-[26rem] mx-auto text-white dark:text-primary-dark bg-primary-light/60 dark:bg-white/25 shadow-2xl shadow-primary-dark dark:shadow-white/25">
                <CardHeader 
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="mb-2 text-primary-dark text-whit "
                >
                    <h1 className="text-2xl text-center font-extrabold tracking-wider">
                        Booking Success !
                    </h1>
                </CardHeader>

                <CardBody className="flex flex-col gap-6 mx-auto px-8 md:px-16 text-lg">
                    <div>
                        <p className="mb-4">Your booking ID:</p>
                        <div className="py-3 text-2xl text-center border-2 border-primary-dark/50 dark:border-white rounded-full">
                            {currentBookingData.bookingId}
                        </div>
                    </div>
                    <p className="text-center">Show this booking ID to the staff upon arrival at Minton Court</p>
                </CardBody>
                <CardFooter className="grid px-8 md:px-16">
                    <ButtonLink pathName={`/bookings/${currentBookingData.bookingId}`}>See Booking Detail</ButtonLink>
                </CardFooter>
            </Card>
        </section>
    )
}