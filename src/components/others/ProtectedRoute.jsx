import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export function ProtectedRoute({children}) {
    const { currentBookingData } = useSelector(state=>state.newBooking)
    const navigateTo = useNavigate()

    useEffect(()=>{
        if(!currentBookingData.bookingID) {

            toast.error("You can't access this page", {
                position: 'top-center',
                autoClose: 3000
            })
            
            navigateTo('/')
        }
    }, [currentBookingData.bookingID])

    return (
        <>
            { currentBookingData.bookingID && children }
        </>
    )  
}