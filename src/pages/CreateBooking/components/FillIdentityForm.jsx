import { InputForm } from "../../../components/elements/InputForm";
import { ButtonBtn } from "../../../components/elements/Buttons";
import { CustomerDataValidation } from "../formValidation/CustomerDataValidation";
import { useEffect, useState } from "react";
import { postBooking, resetFormData } from "../../../store/newBookingSlice";
import { postCustomer } from "../../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDocTitle } from "../../../hooks/useDocTitle"
import { toast } from "react-toastify";
import { updateSchedule } from "../../../store/bookingScheduleSlice";

export function FillIdentityForm() {
    const [isFormFilled, setIsFormFilled] = useState(false)
    const navigateTo = useNavigate()

    const {customerDetail, errors, handleCustomerName, handleCustomerWANumber, handlePassword, validateCustomerData} = CustomerDataValidation()
    
    const dispatch = useDispatch()
    const { customerData, token, error } = useSelector(state=>state.auth)
    const { bookingData, postBookingStatus } = useSelector(state=>state.newBooking)

    useDocTitle('Step 2 - Fill Identity')

    // Disable the button if the form is not filled
    useEffect(()=>{
        if(validateCustomerData()) {
            setIsFormFilled(true)
        } else {
            setIsFormFilled(false)
        }
    },[customerDetail, validateCustomerData])

    // Handle submit form
    function handleSubmit(event) {
        event.preventDefault()

        if(validateCustomerData()) {
            dispatch(postCustomer(customerDetail))
        }
    }

    // post request for booking
    useEffect(()=>{
        if(token) {
            dispatch(postBooking({
                bookingData: {...bookingData},
                token: token
            }))
        } else if(error) {
            toast.error('Something went wrong, please try again', {
                position: 'top-center',
                autoClose: 3000
            })
        }
    },[token, error])

    useEffect(()=>{
        if(postBookingStatus === 201) {
            dispatch(updateSchedule({
                bookingDate: bookingData.bookingDate,
                bookingHour: bookingData.bookingHour,
                token: token
            }))

            // Reset the form to be empty
            dispatch(resetFormData())

            toast.success('Booking Successfully Created!', {
                position: 'top-center',
                autoClose: 3000
            })

            navigateTo('/booking-success')
        } else if(error) {
            toast.error('Something went wrong, please try again', {
                position: 'top-center',
                autoClose: 3000
            })
        }

    }, [postBookingStatus, error])


    return (
        <form onSubmit={handleSubmit} className="w-9/12 max-w-sm mx-auto mt-10 text-lg grid gap-3">
            <InputForm
                label="Your Name"
                onChange={handleCustomerName}
                name="customerName" 
                placeholder="Alex Johnson"
                validationError={errors.customerName}
                defaultValue={customerData.customerName}
            />
            <InputForm
                label="WA Number (10-15 digits)"
                onChange={handleCustomerWANumber}
                name="customerWANumber" 
                placeholder="081231231231"
                validationError={errors.customerWANumber}
                defaultValue={customerData.customerWANumber}
            />
            <InputForm
                label="Password"
                onChange={handlePassword}
                name="password" 
                placeholder="(must be at least 6 characters)"
                validationError={errors.password}
                type="password"
            />

            <ButtonBtn disabled={!isFormFilled} className="mt-8">Sign Up & Create Booking</ButtonBtn>
        </form>
    )
}