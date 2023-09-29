import { useState } from "react";
import { useSelector } from "react-redux";

export function FormValidationTwo() {
    const { formData } = useSelector(state=>state.newBooking)
    const [errors, setErrors] = useState({
        customerName: '',
        customerWANumber: '',
        password: ''
    })
    const [formDataTwo, setFormDataTwo] = useState({
        customerName: formData.customerName,
        customerWANumber: formData.customerWANumber,
        password: ''
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
        // If the input is valid, store in formDataTwo state
        else {
            setFormDataTwo((prevFormData)=>{
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
        // If the input is valid, store in formDataTwo state
        else {
            setFormDataTwo((prevFormData)=>{
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

    // Handle password
    function handlePassword(event) {
        const validPassword = /^.{6,}/g
        const passwordInput = event.target.value

        if(passwordInput === '') {
            setErrors((errors)=>{
                return {
                    ...errors,
                    password: 'This field is required'
                }
            })
        } else if(!validPassword.test(passwordInput)) {
            setErrors((errors)=>{
                return {
                    ...errors,
                    password: 'Password must be at least 6 characters'
                }
            })
        } else {
            setFormDataTwo((prevFormData)=>{
                return {
                    ...prevFormData,
                    password: passwordInput
                }
            })

            setErrors((errors)=>{
                return {
                    ...errors,
                    password: ''
                }
            })
        }
    } 

    function validateFormData() {
        let isValid = true

        // customerName
        if(formDataTwo.customerName === '' || errors.customerName !== '') {
            isValid = false
        }

        // customerWANumber
        if(formDataTwo.customerWANumber === '' || errors.customerWANumber !== '') {
            isValid = false
        }

        // password
        if(formDataTwo.password === '' || errors.password !== '') {
            isValid = false
        }

        return isValid
    }

    return {
        formDataTwo,
        validateFormData,
        handleCustomerName,
        handleCustomerWANumber,
        handlePassword,
        errors
    }
}