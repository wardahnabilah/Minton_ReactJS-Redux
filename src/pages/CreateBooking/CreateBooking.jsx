import { useState } from "react"
import { StepProgresBar } from "./components/StepProgresBar"

export function CreateBooking() {
    const [activeStep, setActiveStep] = useState(0)

    return (
        <section className="py-28">
            <h1 className="text-2.5xl text-center font-extrabold uppercase tracking-wider">Booking Form</h1>
            
            {/* Stepper */}
            <StepProgresBar 
                activeStep={activeStep}
                setActiveStep={setActiveStep}
            />
        </section>       
    )
}