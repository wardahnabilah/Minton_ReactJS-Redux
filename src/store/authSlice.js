import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        customerData: {
            customerName: '',
            customerWANumber: '',
            password:''
        }
    },
    reducers: {
        addCustomerData: (state, action) => {
            const customerDetail = action.payload
            
            state.customerData = {
                ...state.customerData,
                ...customerDetail
            }
        },
    },
})

export const { addCustomerData } = authSlice.actions
export const authReducer = authSlice.reducer