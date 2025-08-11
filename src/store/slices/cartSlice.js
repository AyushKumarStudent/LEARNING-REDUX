// Action Types
/**
 * We can write action types here for Eg: cart/increaseCartItemQuantity can be written as
 * export CART_INCREASE_CART_ITEM_QUANTITY: 'cart/increaseCartItemQuantity'
 * export CART_REMOVE_FROM_CART: 'cart/increaseCartItemQuantity'
*/

import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";

function findItemIndex(state, productId) {
    return state.list.findIndex((cartItem) => cartItem.productId === productId);
}

const slice = createSlice({
    name: "cart",
    initialState: {
        loading: false,
        list: [],
        error: ""
    },
    reducers: {
        addToCart(state, { type, payload }) {
            const existingItemIndex = findItemIndex(state, payload.productId);
            if (existingItemIndex !== -1) {
                state.list[existingItemIndex].quantity += 1
            } else {
                state.list.push({ ...payload, quantity: 1 });
            }
        },
        removeFromCart(state, { type, payload }) {
            const existingItemIndex = findItemIndex(state, payload.productId);
            state.list.splice(existingItemIndex, 1)
        },
        increaseCartItemQuantity(state, { type, payload }) {
            const existingItemIndex = findItemIndex(state, payload.productId);
            state.list[existingItemIndex].quantity += 1
        },
        decreaseCartItemQuantity(state, { type, payload }) {
            const existingItemIndex = findItemIndex(state, payload.productId);
            state.list[existingItemIndex].quantity -= 1
            if (state.list[existingItemIndex].quantity === 0) {
                state.list.splice(existingItemIndex, 1);
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCartData.pending, (state) => {
            state.loading = true
        }).addCase(fetchCartData.fulfilled, (state, action) => {
            state.loading = false;
            state.list = action.payload.products;
        }).addCase(fetchCartData.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload || "Something went wrong";
        })
    }
})

//Let's write selectors
const getProducts = (state) => state.products;
const getCartItems = (state) => state.cartItems;

const getAllCart = (products, cartItems) => {
    return cartItems.list.map(({ productId, quantity }) => {
        const cartProduct = products.list.find((product) => product.id === productId)
        return { ...cartProduct, quantity };
    }).filter(({ title }) => title)
}

export const getAllCartItems = createSelector([getProducts, getCartItems], getAllCart)
export const getCartLoadingState = (state) => state.cartItems.loading
export const getCartErrorState = (state) => state.cartItems.error

export const fetchCartData = createAsyncThunk('cart/fetchCartItems', async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/carts/5');
        return response.json();
    } catch (error) {
        throw new Error(error);
    }
})

export const { addToCart, removeFromCart, increaseCartItemQuantity, decreaseCartItemQuantity } = slice.actions;


export default slice.reducer