import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export function BookingDataValidation() {
    const { bookingData } = useSelector((state)=>state.newBooking)

    const [equipmentData, setEquipmentData] = useState({
        racket: bookingData.racket,
        shuttlecock: bookingData.shuttlecock
    })
    const [bookingDetail, setBookingDetail] = useState({
        bookingDate: bookingData.bookingDate,
        bookingHour: bookingData.bookingHour,
        rent: bookingData.rent,
        racket: bookingData.racket,
        shuttlecock: bookingData.shuttlecock
    })

    // For handling bookingDate and bookingHour select input
    function handleSelectChange(event) {
        const {name, value} = event.target

        setBookingDetail((prevFormData)=>{
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    // For handling radio button (rent)
    function handleRent(event) {
        const rent = event.target.value

        // Store rent in bookingDetail state
        if(rent !== '') {
            setBookingDetail((prevFormData)=>{
                return {
                    ...prevFormData,
                    rent: rent
                }
            })
        }
    }

    // Store equipmentData in bookingDetail
    useEffect(()=>{
        if(bookingDetail.rent === 'yes') {
            setBookingDetail((prevFormData)=>{
                return {
                    ...prevFormData,
                    ...equipmentData
                }
            })
        }
        else if(bookingDetail.rent === 'no') {
            setBookingDetail((prevFormData)=>{
                return {
                    ...prevFormData,
                    racket: 'no',
                    shuttlecock: 'no'
                }
            })
        }
    },[bookingDetail.rent, equipmentData])

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
    function validateBookingData() {
        let isValid = true
        
        // bookingDate
        if(bookingDetail.bookingDate === '') {
            isValid = false
        }

        // bookingHour
        if(bookingDetail.bookingHour === '') {
            isValid = false
        }

        // rent
        if(bookingDetail.rent === '') {
            isValid = false
        } else if(bookingDetail.rent === 'yes') {
            // racket and/or shuttlecock must be filled
            if(bookingDetail.racket === '' && bookingDetail.shuttlecock === '') {
                isValid = false
            }
        }
        
        return isValid
    }

    return {
        bookingDetail,
        handleSelectChange,
        handleRent,
        handleEquipment,
        validateBookingData
    }
}