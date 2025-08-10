import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "products",
    initialState: {
        loading: false,
        list: [],
        error: ''
    },
    reducers: {
        fetchProducts(state) {
            state.loading = true
        },
        fetchProductsError(state, { payload }) {
            state.loading = false;
            state.error = payload || "Something went wrong";
        },
        loadAllProducts(state, { type, payload }) {
            state.loading = false
            state.list = payload
            state.error = "";
        }
    }
})


//Let's write selectors

export const getAllProducts = (state) => state.products.list
export const getProductsLoadingState = (state) => state.products.loading
export const getProductsErrorState = (state) => state.products.error

export const { loadAllProducts, fetchProducts, fetchProductsError } = slice.actions;

export default slice.reducer