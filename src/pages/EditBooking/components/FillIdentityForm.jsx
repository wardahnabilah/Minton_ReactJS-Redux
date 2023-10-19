import { InputForm } from "../../../components/elements/InputForm";
import { ButtonBtn } from "../../../components/elements/Buttons";
import { CustomerDataValidation } from "../formValidation/CustomerDataValidation";
import { useEffect, useState } from "react";
import { patchBooking, updateCurrentBooking } from "../../../store/newBookingSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDocTitle } from "../../../hooks/useDocTitle"
import { updateSchedule } from "../../../store/bookingScheduleSlice";
import { toast } from "react-toastify";
import { patchCustomer } from "../../../store/authSlice";

export function FillIdentityForm() {
    const [isFormFilled, setIsFormFilled] = useState(false)
    const {customerDetail, errors, handleCustomerName, handleCustomerWANumber, handlePassword, validateCustomerData} = CustomerDataValidation()
    const dispatch = useDispatch()
    const { currentBookingData, patchBookingStatus } = useSelector(state=>state.newBooking)
    const { token, patchCustomerStatus } = useSelector(state=>state.auth)
    const navigateTo = useNavigate()

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
            dispatch(updateCurrentBooking(customerDetail))

            dispatch(patchCustomer({
                customerDetail: customerDetail,
                token: token
            }))

            dispatch(patchBooking({
                currentBookingData: currentBookingData,
                token: token
            }))
            
            dispatch(updateSchedule({
                bookingDate: currentBookingData.bookingDate,
                bookingHour: currentBookingData.bookingHour,
                token: token
            }))
        }
    }

    useEffect(()=>{
        if(patchBookingStatus === 200 && patchCustomerStatus === 200) {
            toast.success('Booking Successfully Edited!', {
                position: 'top-center',
                autoClose: 3000
            })

            navigateTo(`/bookings/${currentBookingData.bookingId}`)
        }

    },[patchBookingStatus, patchCustomerStatus])

    return (
        <form onSubmit={handleSubmit} className="w-9/12 max-w-sm mx-auto mt-10 text-lg grid gap-3">
            <InputForm
                label="Your Name"
                onChange={handleCustomerName}
                name="customerName" 
                placeholder="Alex Johnson"
                validationError={errors.customerName}
                defaultValue={customerDetail.customerName}
            />
            <InputForm
                label="WA Number (10-15 digits)"
                onChange={handleCustomerWANumber}
                name="customerWANumber" 
                placeholder="081231231231"
                validationError={errors.customerWANumber}
                defaultValue={customerDetail.customerWANumber}
            />

            <ButtonBtn disabled={!isFormFilled} className="mt-8">Edit Booking</ButtonBtn>
        </form>
    )
}