import { createStore, combineReducers } from "redux";
import { products } from "../api/products";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";
import wishlistReducer from "./wishlistReducer";

/* const initialState = {
    products: products,
    cartItems: [],
    wishlist: [],
} */

// combine reducers combines multiple reducers into one
// initial state can be considered as the initial state of the combined reducer
const reducer = combineReducers({
    products: productsReducer,
    cartItems: cartReducer,
    wishlist: wishlistReducer
})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());


export default store;