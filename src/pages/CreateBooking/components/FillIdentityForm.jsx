import { InputForm } from "../../../components/elements/InputForm";
import { ButtonBtn } from "../../../components/elements/Buttons";
import { FormValidationTwo } from "../formValidation/FormValidationTwo";
import { useEffect, useState } from "react";
import { addNewData, generateBookingID, resetFormData } from "../../../store/newBookingSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDocTitle } from "../../../hooks/useDocTitle"
import { updateSchedule } from "../../../store/bookingScheduleSlice";
import { toast } from "react-toastify";

export function FillIdentityForm() {
    const [isFormFilled, setIsFormFilled] = useState(false)
    const {formDataTwo, errors, handleCustomerName, handleCustomerWANumber, validateFormData} = FormValidationTwo()
    const dispatch = useDispatch()
    const { formData } = useSelector(state=>state.newBooking)
    const navigateTo = useNavigate()

    useDocTitle('Step 2 - Fill Identity')

    // Disable the button if the form is not filled
    useEffect(()=>{
        if(validateFormData()) {
            setIsFormFilled(true)
        } else {
            setIsFormFilled(false)
        }
    },[formDataTwo, validateFormData])

    // Handle submit form
    function handleSubmit(event) {
        event.preventDefault()

        if(validateFormData()) {
            dispatch(addNewData(formDataTwo))
            dispatch(generateBookingID())

            dispatch(updateSchedule({bookingHour: formData.bookingHour, bookingDate: formData.bookingDate}))

            // Reset the form to be empty
            dispatch(resetFormData())

            toast.success('Booking Successfully Created!', {
                position: 'top-center',
                autoClose: 3000
            })

            navigateTo('/booking-success')
        }

    }

    return (
        <form onSubmit={handleSubmit} className="w-9/12 max-w-sm mx-auto mt-10 text-lg grid gap-3">
            <InputForm
                label="Your Name"
                onChange={handleCustomerName}
                name="customerName" 
                placeholder="Alex Johnson"
                validationError={errors.customerName}
                defaultValue={formData.customerName}
            />
            <InputForm
                label="WA Number (10-15 digits)"
                onChange={handleCustomerWANumber}
                name="customerWANumber" 
                placeholder="081231231231"
                validationError={errors.customerWANumber}
                defaultValue={formData.customerWANumber}
            />

            <ButtonBtn disabled={!isFormFilled} className="mt-8">Create Booking</ButtonBtn>
        </form>
    )
}