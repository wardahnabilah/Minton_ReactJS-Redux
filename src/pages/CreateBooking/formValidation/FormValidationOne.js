import { useState } from "react";

export function FormValidationOne() {
    const [formData, setFormData] = useState({
        bookingDate: '',
        bookingHour: '',
        rent: '',
        racket: 'no',
        shuttlecock: 'no'
    })

    // Store the input data into formData state
    function handleChange(event) {
        const {name, value} = event.target

        setFormData((prevFormData)=>{
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    // Validate the form data
    function validateFormData() {
        let isValid = true
        
        // bookingDate
        if(formData.bookingDate === '') {
            isValid = false
        }

        // bookingHour
        if(formData.bookingHour === '') {
            isValid = false
        }

        // rent
        if(formData.rent === '') {
            isValid = false
        }

        // the equipment
        if(formData.rent === 'yes') {
            // racket and/or shuttlecock must be filled
            if(formData.racket === '' && formData.shuttlecock === '') {
                isValid = false
            }
        }
        
        return isValid
    }

    return {
        formData,
        handleChange,
        validateFormData
    }
}