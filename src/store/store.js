import { products } from "../api/products";
import productsReducer from "./slices/productsSlice";
import cartReducer from "./slices/cartSlice";
import wishlistReducer from "./slices/wishlistSlice";
import { configureStore } from "@reduxjs/toolkit";

/* const initialState = {
    products: products,
    cartItems: [],
    wishlist: [],
} */

// combine reducers combines multiple reducers into one
// initial state can be considered as the initial state of the combined reducer

const store = configureStore({
    reducer: {
        products: productsReducer,
        cartItems: cartReducer,
        wishlist: wishlistReducer
    }
});


export default store;