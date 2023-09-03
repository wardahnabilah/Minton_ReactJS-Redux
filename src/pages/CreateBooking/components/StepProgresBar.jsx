import { Stepper, Step } from "@material-tailwind/react"

export function StepProgresBar({activeStep, setActiveStep}) {
    return (
        <div className="w-7/12 max-w-[26rem] mx-auto mt-10 mb-[5.5rem]">
            <Stepper 
                activeStep={activeStep}
                lineClassName="dark:bg-accent-lightgrey/40"
                activeLineClassName="bg-primary-dark dark:bg-accent-yellow"
            >
                <Step 
                    onClick={()=>setActiveStep(0)} 
                    className="bg-accent-lightgrey dark:bg-accent-darkgrey text-accent-lightgrey dark:text-accent-lightgrey/40 hover:cursor-pointer"
                    activeClassName="bg-primary-dark dark:bg-accent-yellow text-primary-dark dark:text-white"
                    completedClassName="bg-primary-dark dark:bg-accent-yellow text-primary-dark dark:text-white"
                >
                    <span className="text-white dark:text-primary-dark">1</span>
                    <div className="absolute -bottom-8 w-max" color="inherit">Select Schedule</div>
                </Step>
                <Step 
                    onClick={()=>setActiveStep(1)} 
                    className="bg-accent-lightgrey dark:bg-accent-darkgrey text-accent-lightgrey dark:text-accent-lightgrey/40 hover:cursor-pointer"
                    activeClassName="bg-primary-dark dark:bg-accent-yellow text-primary-dark dark:text-white"
                    completedClassName="bg-primary-dark dark:bg-accent-yellow text-primary-dark dark:text-white"
                >
                    <span className="text-white dark:text-primary-dark">2</span>
                    <div className="absolute -bottom-8 w-max" color="inherit">Fill Identity</div>
                </Step>
            </Stepper>
        </div>
    )
}