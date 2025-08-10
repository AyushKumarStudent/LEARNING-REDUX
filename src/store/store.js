import { products } from "../api/products";
import productsReducer from "./slices/productsSlice";
import cartReducer from "./slices/cartSlice";
import wishlistReducer from "./slices/wishlistSlice";
import { configureStore } from "@reduxjs/toolkit";
import apiMiddleware from "./middleware/api";
import { func } from "./middleware/func"; //Cursom Middleware || Thunk
/* const initialState = {
    products: products,
    cartItems: [],
    wishlist: [],
} */



const store = configureStore({
    reducer: {
        products: productsReducer,
        cartItems: cartReducer,
        wishlist: wishlistReducer
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), apiMiddleware, func],
});


export default store;