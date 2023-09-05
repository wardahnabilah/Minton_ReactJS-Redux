import { useEffect, useState } from "react";

export function FormValidationOne() {
    const [equipmentData, setEquipmentData] = useState({})
    const [formData, setFormData] = useState({
        bookingDate: '',
        bookingHour: '',
        rent: '',
        racket: '',
        shuttlecock: ''
    })

    // For handling bookingData and bookingHour input
    function handleChange(event) {
        const {name, value} = event.target

        setFormData((prevFormData)=>{
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    // For handling radio button (rent)
    function handleRent(event) {
        const rent = event.target.value
        let equipment = {}

        // If user click 'No', set the equipment to empty
        if(rent === 'no') {
            equipment = {
                racket: '',
                shuttlecock: ''
            }
        }

        // Store rent and equipment in formData state
        if(rent !== '') {
            setFormData((prevFormData)=>{
                return {
                    ...prevFormData,
                    rent: rent,
                    ...equipment
                }
            })
        }
    }

    // If user click 'Yes' on radio button (rent), 
    // set the equipment to equipmentData from checkbox (equipment)
    useEffect(()=>{
        if(formData.rent === 'yes') {
            setFormData((prevFormData)=>{
                return {
                    ...prevFormData,
                    ...equipmentData
                }
            })
        }
    },[equipmentData, formData.rent])


    // For handling checkbox (equipment), get checkbox value
    function handleEquipment(event) {
        const {name, checked} = event.target
        let value = ''

        // If the checkbox is checked, set the value to 'yes'
        if(checked) {
            value = 'yes'
        }

        // Store the checkbox values in equipmentData state
        setEquipmentData((prevEquipmentData)=>{
            return {
                ...prevEquipmentData,
                [name]: value
            }
        })
    }

    // For validating the form data
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
        } else if(formData.rent === 'yes') {
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
        handleRent,
        handleEquipment,
        validateFormData
    }
}