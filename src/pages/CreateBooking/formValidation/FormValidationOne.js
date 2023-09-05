import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export function FormValidationOne() {
    const { formData } = useSelector((state)=>state.newBooking)
    const [equipmentData, setEquipmentData] = useState({})
    const [formDataOne, setFormDataOne] = useState({
        bookingDate: formData.bookingDate,
        bookingHour: formData.bookingHour,
        rent: formData.rent,
        racket: formData.racket,
        shuttlecock: formData.shuttlecock
    })

    // For handling bookingData and bookingHour input
    function handleChange(event) {
        const {name, value} = event.target

        setFormDataOne((prevFormData)=>{
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
            setFormDataOne((prevFormData)=>{
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
        if(formDataOne.rent === 'yes') {
            setFormDataOne((prevFormData)=>{
                return {
                    ...prevFormData,
                    ...equipmentData
                }
            })
        }
    },[equipmentData, formDataOne.rent])


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
        if(formDataOne.bookingDate === '') {
            isValid = false
        }

        // bookingHour
        if(formDataOne.bookingHour === '') {
            isValid = false
        }

        // rent
        if(formDataOne.rent === '') {
            isValid = false
        } else if(formDataOne.rent === 'yes') {
            // racket and/or shuttlecock must be filled
            if(formDataOne.racket === '' && formDataOne.shuttlecock === '') {
                isValid = false
            }
        }
        
        return isValid
    }

    return {
        formDataOne,
        handleChange,
        handleRent,
        handleEquipment,
        validateFormData
    }
}