import { products } from "../api/products";
import productsReducer from "./slices/productsSlice";
import cartReducer from "./slices/cartSlice";
import wishlistReducer from "./slices/wishlistSlice";
import { configureStore } from "@reduxjs/toolkit";
import { logger } from "./middleware/logger"

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
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});


export default store;