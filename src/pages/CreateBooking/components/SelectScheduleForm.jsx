import { useEffect, useState } from "react"
import { SelectForm } from "../../../components/elements/SelectForm"
import { Radio, Checkbox } from "@material-tailwind/react"
import { ButtonBtn } from "../../../components/elements/Buttons"
import { FormValidationOne } from "../formValidation/FormValidationOne"
import { useDispatch, useSelector } from "react-redux"
import { addNewData } from "../../../store/newBookingSlice"

export function SelectScheduleForm({handleNextStep}) { 
    const [isRent, setIsRent] = useState(false)
    const [isFormFilled, setIsFormFilled] = useState(false)
    const { formDataOne, handleChange, handleRent, handleEquipment, validateFormData } = FormValidationOne()
    const dispatch = useDispatch()
    const { formData } = useSelector(state=>state.newBooking)

    // Open equipment checkbox if rent is 'yes'
    useEffect(()=>{
        if(formData.rent === 'yes'){
            setIsRent(true)
        }
    },[])

    // Disable the button if the form is not filled
    useEffect(()=>{
        if(validateFormData()) {
            setIsFormFilled(true)
        } else {
            setIsFormFilled(false)
        } 
    },[formDataOne, validateFormData])

    function handleForm(event) {
        event.preventDefault()

        if(validateFormData()) {
            dispatch(addNewData(formDataOne))

            handleNextStep()
        }
    }
    
    return (
        <form onSubmit={handleForm} id="firstStepForm" className="flex flex-col gap-5 w-9/12 max-w-sm mx-auto mt-10 text-lg">
            {/* Select booking date */}
            <SelectForm
                onChange={handleChange}
                name="bookingDate"
                options={dateOptions}
                label="Select Date"
                defaultValue={formData.bookingDate}
            />
            {/* Select booking hour */}
            <SelectForm
                onChange={handleChange}
                name="bookingHour" 
                options={hourOptions}
                label="Select Hour"
                defaultValue={formData.bookingHour}
            />
            
            {/* Rent racket or shuttlecock */}
            <label className="text-xl mt-4">Do you want to rent a racket or shuttlecock?</label>
            <div className="flex justify-around mb-2 text-xl">
                <Radio 
                    name="rent"
                    label={<span className="text-primary-dark dark:text-white">Yes</span>} 
                    icon={<CircleIcon />}
                    value="yes"
                    onClick={()=>setIsRent(true)}
                    onChange={handleRent}
                    defaultChecked={formData.rent === 'yes'}
                    className="border-primary-dark dark:border-white"
                />
                <Radio 
                    name="rent" 
                    label={<span className="text-primary-dark dark:text-white">No</span>} 
                    icon={<CircleIcon />}
                    value="no"
                    onClick={()=>setIsRent(false)}
                    onChange={handleRent}
                    defaultChecked={formData.rent === 'no'}
                    className="border-primary-dark dark:border-white"
                />
            </div>

            {/* Select rental equipment */}
            <div className={isRent ? '' : 'hidden'}>
                <label className="block text-xl mb-6">Select the equipment you need:</label>
                <div className="flex flex-col gap-4">
                    <label className="relative flex items-center w-10/12 h-16 mx-auto px-4 overflow-hidden border-2 border-primary-dark/80 dark:border-white/90 rounded-2xl">
                        <Checkbox
                            onChange={handleEquipment} 
                            name="racket"
                            icon={<CheckIcon />}
                            className="border-primary-dark dark:border-white checked:bg-primary-dark/80 dark:checked:bg-white"
                            defaultChecked={formData.racket === 'yes'}
                        />
                        <span className="p-3">Racket</span>
                        <svg className="absolute -top-3 -right-9 xsm:-right-1 -rotate-90 dark:stroke-white" width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                            <path className="fill-primary-dark/80 dark:fill-primary-dark" d="M104.422 49.1382C116.943 36.6207 120.078 17.7975 111.135 8.86315C102.195 -0.0806028 83.3797 3.0544 70.8606 15.5719C60.5895 25.8488 58.2777 39.1144 64.5101 48.7763L61.2064 52.08C60.6215 52.6685 60.2017 53.4005 59.9891 54.2026C59.7765 55.0046 59.7786 55.8484 59.9952 56.6494L37.4656 79.1719L27.8189 85.47C27.8189 85.47 19.4247 93.8607 9.35807 103.931C8.44684 104.839 4.79441 106.283 4.79441 106.283C3.61131 106.836 3.39944 108.043 4.32192 108.964L11.0343 115.676C11.9568 116.599 13.1624 116.391 13.7155 115.208C13.7155 115.208 15.1592 111.553 16.0667 110.644L34.5313 92.1825L40.8218 82.5338L63.3514 60.0038C64.152 60.2206 64.9956 60.2228 65.7974 60.0101C66.5991 59.7975 67.3308 59.3776 67.9188 58.7925L71.2225 55.4906C80.8879 61.725 94.1514 59.415 104.422 49.1382ZM75.0905 18.1219L77.5767 20.6063L74.2186 23.9644L71.8487 21.5925C72.5818 20.6869 73.3543 19.7925 74.2186 18.9281C74.4999 18.6488 74.8018 18.3938 75.0905 18.1219ZM95.7245 8.54815L97.7119 10.5356L94.3557 13.8938L90.9977 10.5356L92.597 8.94002C93.6307 8.74698 94.6751 8.61612 95.7245 8.54815ZM87.6471 30.6769L84.2891 34.0313L80.931 30.6731L84.2853 27.3225L87.6471 30.6769ZM85.9672 25.6425L89.3252 22.2844L92.6758 25.6425L89.3252 29.0006L85.9672 25.6425ZM82.6129 35.7094L79.2548 39.0675L75.8967 35.7132L79.2548 32.355L82.6129 35.7094ZM82.6129 45.78L79.2548 49.1344L75.8967 45.7838L79.2548 42.4219L82.6129 45.78ZM80.931 40.7438L84.2891 37.3894L87.6471 40.7438L84.2891 44.0981L80.931 40.7438ZM89.3252 42.4219L92.6758 45.7838L89.3215 49.1382L85.9634 45.7838L89.3252 42.4219ZM89.3215 39.0675L85.9672 35.7094L89.3252 32.355L92.6758 35.7132L89.3215 39.0675ZM90.9977 30.6769L94.3557 27.3225L97.71 30.6769L94.3557 34.0313L90.9977 30.6769ZM96.0338 25.6425L99.3919 22.2844L102.746 25.6425L99.3919 29.0006L96.0338 25.6425ZM104.426 27.3188L107.78 30.6769L104.426 34.0313L101.072 30.6731L104.426 27.3188ZM106.104 25.6425L109.462 22.2844L111.452 24.2738C111.384 25.3245 111.252 26.3702 111.058 27.405L109.462 29.0006L106.104 25.6425ZM104.426 23.9644L101.072 20.6025L104.426 17.2481L107.78 20.6025L104.426 23.9644ZM99.3919 18.93L96.0338 15.5719L99.3919 12.2138L102.746 15.5719L99.3919 18.93ZM97.71 20.6063L94.3557 23.9644L90.9977 20.6063L94.3557 17.2519L97.71 20.6063ZM89.3252 18.93L85.9672 15.5719L89.3252 12.2175L92.6758 15.5719L89.3252 18.93ZM87.6471 20.6063L84.2891 23.9644L80.931 20.6025L84.2891 17.2481L87.6471 20.6063ZM82.6129 25.6425L79.2548 28.9969L75.9005 25.6425L79.2548 22.2844L82.6129 25.6425ZM77.5767 30.6769L74.2186 34.0313L70.8606 30.6769L74.2186 27.3225L77.5767 30.6769ZM72.5406 35.7094L69.1862 39.0638L65.9163 35.7994L65.9276 35.6157L69.1862 32.355L72.5406 35.7094ZM74.2186 37.3894L77.5767 40.7438L74.2186 44.1019L70.8606 40.7438L74.2186 37.3894ZM77.5767 50.8163L75.8049 52.5882C74.3327 51.9025 72.9673 51.0076 71.7512 49.9313L74.2186 47.4619L77.5767 50.8163ZM79.2548 52.4963L80.7379 53.9757C79.9062 53.8678 79.0835 53.6999 78.2761 53.4731L79.2548 52.4963ZM84.2009 54.0863L80.931 50.8163L84.2891 47.4582L87.6471 50.8163L84.3884 54.075L84.2009 54.0863ZM89.3252 52.4925L89.8127 52.98C89.3515 53.1357 88.8883 53.2688 88.4252 53.3944L89.3252 52.4925ZM91.0014 50.8163L94.3557 47.4619L96.4876 49.59C95.087 50.5557 93.6564 51.3675 92.2108 52.0275L91.0014 50.8163ZM91.0014 40.7438L94.3557 37.3894L97.71 40.7438L94.3557 44.1019L91.0014 40.7438ZM96.0376 35.7094L99.3919 32.355L102.75 35.7094L99.3919 39.0675L96.0376 35.7094ZM104.426 37.3894L106.28 39.2438C105.437 40.5807 104.484 41.8763 103.453 43.1269L101.07 40.7438L104.426 37.3894ZM106.101 35.7132L109.462 32.355L109.624 32.5163C109.048 34.065 108.349 35.6119 107.524 37.1325L106.101 35.7132ZM111.135 20.6063L111.377 20.3663C111.397 20.5538 111.435 20.7319 111.452 20.9213L111.135 20.6063ZM109.462 18.93L106.104 15.5719L108.551 13.1231C109.579 14.4019 110.334 15.8981 110.822 17.5706L109.462 18.93ZM104.426 13.8938L101.072 10.5356L102.431 9.17627C104.102 9.66377 105.598 10.4194 106.875 11.445L104.426 13.8938ZM99.3919 8.8594L99.0788 8.54627C99.2681 8.56127 99.4444 8.60065 99.63 8.62315L99.3919 8.8594ZM87.6471 10.5356L84.2891 13.8938L82.8697 12.4744C84.3884 11.6494 85.9372 10.95 87.4859 10.3725L87.6471 10.5356ZM82.6129 15.5719L79.2548 18.93L76.8717 16.5469C78.1049 15.5217 79.4025 14.5767 80.7566 13.7175L82.6129 15.5719ZM72.5406 25.6425L69.1862 29.0006L67.975 27.7894C68.635 26.3438 69.445 24.9113 70.4125 23.5106L72.5406 25.6425ZM67.5063 30.6769L66.6082 31.575C66.73 31.1119 66.865 30.6525 67.0207 30.1894L67.5063 30.6769ZM67.5063 40.7438L66.5294 41.7225C66.3034 40.9162 66.1355 40.0947 66.0269 39.2644L67.5063 40.7438ZM69.1862 42.4219L72.5406 45.78L70.0731 48.2532C68.9956 47.0365 68.0995 45.6705 67.4125 44.1975L69.1862 42.4219ZM98.4094 48.1519L96.0357 45.78L99.39 42.4219L101.876 44.9119C101.606 45.2006 101.353 45.4988 101.07 45.78C100.207 46.6444 99.315 47.4188 98.4094 48.1519Z" fill="black"/>
                        </svg>
                    </label>
                    <label className="relative flex items-center w-10/12 h-16 mx-auto px-4 overflow-hidden border-2 border-primary-dark/80 dark:border-white/90 rounded-2xl">
                        <Checkbox
                            onChange={handleEquipment} 
                            name="shuttlecock"
                            icon={<CheckIcon />}
                            className="border-primary-dark dark:border-white checked:bg-primary-dark/80 dark:checked:bg-white"
                            defaultChecked={formData.shuttlecock === 'yes'}
                        />
                        <span className="p-3">Shuttlecock</span>
                        <svg className="absolute -top-2 -right-7 xsm:right-3 rotate-180 stroke-[.15rem] dark:stroke-white" width="90" height="100" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="fill-primary-dark/80 dark:fill-primary-dark" d="M61.5 9.99997C56.65 10.15 52.9 14.2 53.05 19C53.1 20.2 53.35 21.35 53.85 22.5L55.3 25.7C55.5 26.35 55.15 27.05 54.45 27.25C54 27.5 53.5 27.25 53.15 26.85L51.05 24.1C49.4 22 46.9 20.7 44.25 20.65C39.4 20.55 35.4 24.4 35.3 29.2C35.25 31.3 35.95 33.3 37.25 35L39.35 37.5H39.4C39.8 38.15 39.65 38.95 39.1 39.35C38.65 39.7 38.05 39.7 37.65 39.35L35 37.25C33.3 35.95 31.25 35.25 29.2 35.3C24.4 35.4 20.55 39.4 20.65 44.25C20.7 46.9 22 49.4 24.1 51.05L26.95 53.25C27.5 53.75 27.5 54.55 26.9 55C26.7355 55.1705 26.5223 55.286 26.2896 55.3308C26.0569 55.3755 25.816 55.3473 25.6 55.25H25.55L22.5 53.85C21.35 53.4 20.2 53.1 19 53.05C14.2 52.9 10.15 56.7 10 61.55C10 65.15 12 68.45 15.3 69.85L72.25 95.2L95.2 72.25L69.85 15.3C68.45 11.95 65 9.84997 61.5 9.99997ZM65.65 30.5C67.75 30.45 69.65 31.65 70.45 33.55L85.7 67.75L65.95 48.05L61.3 37.5C59.8 34.35 62.1 30.6 65.65 30.5ZM49.25 44.25C50.6 44.25 51.85 44.75 52.8 45.75L76.85 69.8C78.85 71.7 78.9 74.85 77 76.85C75 78.85 71.9 78.9 69.8 76.85L45.75 52.8C45.2745 52.3472 44.8941 51.804 44.6311 51.2023C44.3681 50.6007 44.2279 49.9525 44.2186 49.296C44.2093 48.6394 44.3311 47.9876 44.5769 47.3787C44.8226 46.7698 45.1875 46.2161 45.65 45.75C46.6 44.75 47.9 44.25 49.25 44.25ZM35.65 60.85C36.3 60.85 37 61.05 37.5 61.3L48.15 66L67.85 85.7L33.55 70.45C28.45 68.25 30.15 60.7 35.65 60.85ZM101.4 80.2L80.2 101.4L84.45 105.65C88.25 109.4 93.75 110.85 98.9 109.5C101.436 108.807 103.747 107.465 105.606 105.606C107.465 103.747 108.807 101.436 109.5 98.9C110.85 93.75 109.4 88.25 105.65 84.45L101.4 80.2Z" fill="black"/>
                        </svg>
                    </label>
                </div>
            </div>

            <ButtonBtn className="mt-8" disabled={!isFormFilled}>Next</ButtonBtn>
        </form>
    )
}

// Dummy data date
const dateOptions = [
    '10 September 2023',
    '11 September 2023',
    '12 September 2023',
    '13 September 2023'
]

// Dummy data hour
const hourOptions = [
    '08:00 - 09:00',
    '16:00 - 17:00',
    '18:00 - 19:00'
]

// Radio button icon
function CircleIcon() {
    return (
        <svg className="fill-primary-dark dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z">
            </path>
        </svg>
    )
}

function CheckIcon() {
    return (
        <svg className="fill-white dark:fill-primary-dark stroke-2 dark:stroke-primary-dark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
        </svg>
    )
}
