import { products } from "../api/products";
import productsReducer from "./slices/productsSlice";
import cartReducer from "./slices/cartSlice";
import wishlistReducer from "./slices/wishlistSlice";
import { configureStore } from "@reduxjs/toolkit";
import apiMiddleware from "./middleware/api";
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
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiMiddleware),
});


export default store;