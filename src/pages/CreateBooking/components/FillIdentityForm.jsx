import { InputForm } from "../../../components/elements/InputForm";
import { ButtonBtn } from "../../../components/elements/Buttons";
import { useState } from "react";

export function FillIdentityForm() {
    const [isFormFilled, setIsFormFilled] = useState(false)

    return (
        <form className="w-9/12 max-w-sm mx-auto mt-10 text-lg grid gap-3">
            <InputForm
                label="Your Name"
                name="customerName" 
                placeholder="Alex Johnson"
            />
            <InputForm
                label="WA Number (10-15 digits)"
                name="customerWANumber" 
                placeholder="081231231231"
            />

            <ButtonBtn disabled={!isFormFilled} className="mt-8">Create Booking</ButtonBtn>
        </form>
    )
}