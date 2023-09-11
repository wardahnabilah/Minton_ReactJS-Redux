import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export function FormValidationOne() {
    const { currentBookingData } = useSelector((state)=>state.newBooking)
    const [equipmentData, setEquipmentData] = useState({
        racket: currentBookingData.racket,
        shuttlecock: currentBookingData.shuttlecock
    })
    const [formDataOne, setFormDataOne] = useState({
        bookingDate: currentBookingData.bookingDate,
        bookingHour: currentBookingData.bookingHour,
        rent: currentBookingData.rent,
        racket: currentBookingData.racket,
        shuttlecock: currentBookingData.shuttlecock
    })

    // For handling bookingDate and bookingHour select input
    function handleSelectChange(event) {
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

        // Store rent in formDataOne state
        if(rent !== '') {
            setFormDataOne((prevFormData)=>{
                return {
                    ...prevFormData,
                    rent: rent
                }
            })
        }
    }

    // Store equipmentData in formDataOne
    useEffect(()=>{
        if(formDataOne.rent === 'yes') {
            setFormDataOne((prevFormData)=>{
                return {
                    ...prevFormData,
                    ...equipmentData
                }
            })
        }
        else if(formDataOne.rent === 'no') {
            setFormDataOne((prevFormData)=>{
                return {
                    ...prevFormData,
                    racket: '',
                    shuttlecock: ''
                }
            })
        }
    },[formDataOne.rent, equipmentData])

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

    // Check whether every input is empty or not
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
        handleSelectChange,
        handleRent,
        handleEquipment,
        validateFormData
    }
}