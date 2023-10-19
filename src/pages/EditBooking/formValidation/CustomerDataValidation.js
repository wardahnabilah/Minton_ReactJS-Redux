import { useState } from "react";
import { useSelector } from "react-redux";

export function CustomerDataValidation() {
    const { currentBookingData } = useSelector(state=>state.newBooking)
    const [errors, setErrors] = useState({
        customerName: '',
        customerWANumber: ''
    })
    const [customerDetail, setCustomerDetail] = useState({
        customerName: currentBookingData.customerName,
        customerWANumber: currentBookingData.customerWANumber,
        customerId: currentBookingData.customerId
    })

    // Handle customerName
    function handleCustomerName(event) {
        const notAlphabet = /[^A-Za-z\s]/g
        const customerNameInput = event.target.value

        // If the input is not alphabet or empty, add error message
        if(customerNameInput === '') {
            setErrors((errors)=>{
                return {
                    ...errors,
                    customerName: 'This field is required'
                }
            })
        }  
        else if(notAlphabet.test(customerNameInput)) {
            setErrors((errors)=>{
                return {
                    ...errors,
                    customerName: 'Please input a valid name'
                }
            })
        } 
        // If the input is valid, store in customerDetail state
        else {
            setCustomerDetail((prevFormData)=>{
                return {
                    ...prevFormData,
                    customerName: customerNameInput
                }
            })

            setErrors((errors)=>{
                return {
                    ...errors,
                    customerName: ''
                }
            })
        }

    }

    // Handle customerWANumber
    function handleCustomerWANumber(event) {
        const validWANumber = /^(\d{10,15})$/g
        const customerWANumberInput = event.target.value

        // If the input is not number or empty, add error message
        if(customerWANumberInput === '') {
            setErrors((errors)=>{
                return {
                    ...errors,
                    customerWANumber: 'This field is required'
                }
            })
        }
        else if(!validWANumber.test(customerWANumberInput)) {
            setErrors((errors)=>{
                return {
                    ...errors,
                    customerWANumber: 'Please input a valid WA number'
                }
            })
        }
        // If the input is valid, store in customerDetail state
        else {
            setCustomerDetail((prevFormData)=>{
                return {
                    ...prevFormData,
                    customerWANumber: customerWANumberInput
                }
            })

            setErrors((errors)=>{
                return {
                    ...errors,
                    customerWANumber: ''
                }
            })
        }
    }

    function validateCustomerData() {
        let isValid = true

        // customerName
        if(customerDetail.customerName === '' || errors.customerName !== '') {
            isValid = false
        }

        // customerWANumber
        if(customerDetail.customerWANumber === '' || errors.customerWANumber !== '') {
            isValid = false
        }

        return isValid
    }

    return {
        customerDetail,
        validateCustomerData,
        handleCustomerName,
        handleCustomerWANumber,
        errors
    }
}