import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

// postCustomer
export const postCustomer = createAsyncThunk('auth/postCustomer', async (customerDetail) => {
    const response = await axios.post(`${process.env.REACT_APP_HOST}/register`, customerDetail)
    const data = await response.data

    return data
})

// patchCustomer
export const patchCustomer = createAsyncThunk('auth/patchCustomer', async ({customerDetail, token}) => {
    const response = await axios({
        url: `users/${customerDetail.customerId}`,
        method: 'patch',
        baseURL: `${process.env.REACT_APP_HOST}`,
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        data: JSON.stringify({
            customerName: customerDetail.customerName,
            customerWANumber: customerDetail.customerWANumber
        })
    })

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
        error: '',

        // patchCustomer
        patchCustomerLoading: false,
        patchCustomerStatus: '',
        patchCustomerError: ''
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
            // postCustomer
            .addCase(postCustomer.pending, (state) => {
                state.loading = true
            }) 
            .addCase(postCustomer.fulfilled, (state, action) => {
                state.loading = false
                state.token = action.payload.token
                state.customerData = action.payload.customerData
            })
            .addCase(postCustomer.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })

            // patchCustomer
            .addCase(patchCustomer.pending, (state) => {
                state.patchCustomerLoading = true
            }) 
            .addCase(patchCustomer.fulfilled, (state, action) => {
                state.patchCustomerLoading = false
                state.patchCustomerStatus = action.payload.status
            })
            .addCase(patchCustomer.rejected, (state, action) => {
                state.patchCustomerLoading = false
                state.patchCustomerError = action.error.message
            })
    }
})

export const { addCustomerData } = authSlice.actions
export const authReducer = authSlice.reducer