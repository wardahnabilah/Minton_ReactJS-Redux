import { useState } from "react"
import { StepProgresBar } from "./components/StepProgresBar"
import { SelectScheduleForm } from "./components/SelectScheduleForm"
import { FillIdentityForm } from "./components/FillIdentityForm"

export function EditBooking() {
    const [activeStep, setActiveStep] = useState(0)

    function handleNextStep() {
        setActiveStep(prevStep => prevStep + 1)
    }

    return (
        <section className="py-28">
            <h1 className="text-2.5xl text-center font-extrabold uppercase tracking-wider">Edit Booking Form</h1>
            
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