import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "products",
    initialState: {
        loading: false,
        list: [],
        error: ''
    },
    extraReducers: ((builder) => {
        builder.addCase(fetchProductsData.pending, (state) => {
            state.loading = true
        }).addCase(fetchProductsData.fulfilled, (state, { payload }) => {
            state.loading = false
            state.list = payload
            state.error = "";
        }).addCase(fetchProductsData.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload || "Something went wrong";
        })
    })
})


//Let's write selectors

export const getAllProducts = (state) => state.products.list
export const getProductsLoadingState = (state) => state.products.loading
export const getProductsErrorState = (state) => state.products.error


export const fetchProductsData = createAsyncThunk("products/fetchProducts", async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    return response.json();
})

export default slice.reducer