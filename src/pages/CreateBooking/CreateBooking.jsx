import { useState, useEffect } from "react"
import { StepProgresBar } from "./components/StepProgresBar"
import { SelectScheduleForm } from "./components/SelectScheduleForm"
import { FillIdentityForm } from "./components/FillIdentityForm"
import { useDispatch } from "react-redux"
import { fetchSchedules } from "../../store/bookingScheduleSlice"

export function CreateBooking() {
    const [activeStep, setActiveStep] = useState(0)
    const dispatch = useDispatch()

    function handleNextStep() {
        setActiveStep(prevStep => prevStep + 1)
    }

    // Get booking schedules from API
    useEffect(()=>{
        dispatch(fetchSchedules())
    }, [dispatch])

    return (
        <section className="py-28">
            <h1 className="text-2.5xl text-center font-extrabold uppercase tracking-wider">Booking Form</h1>
            
            {/* Stepper */}
            <StepProgresBar 
                activeStep={activeStep}
                setActiveStep={setActiveStep}
            />

            {/* First Step - Select Schedule */}
            {activeStep === 0 && <SelectScheduleForm handleNextStep={handleNextStep}/>}

            {/* Second Step - Fill Identity */}
            {activeStep === 1 && <FillIdentityForm />}
        </section>       
    )
}