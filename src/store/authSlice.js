import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

// postCustomer
export const postCustomer = createAsyncThunk('/auth/postCustomer', async (customerDetail) => {
    const response = await axios.post(`${process.env.REACT_APP_HOST}/register`, customerDetail)
    const data = await response.data

    return data
})

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        customerData: {
            customerName: '',
            customerWANumber: '',
            password:''
        },
        token: '',
        loading: false,
        error: ''
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
    extraReducers: (builder) => {
        builder
            .addCase(postCustomer.pending, (state) => {
                state.loading = true
            }) 
            .addCase(postCustomer.fulfilled, (state, action) => {
                state.loading = false
                state.token = action.payload.token
            })
            .addCase(postCustomer.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }
})

export const { addCustomerData } = authSlice.actions
export const authReducer = authSlice.reducer