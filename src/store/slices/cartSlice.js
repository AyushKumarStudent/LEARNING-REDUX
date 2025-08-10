// Action Types
/**
 * We can write action types here for Eg: cart/increaseCartItemQuantity can be written as
 * export CART_INCREASE_CART_ITEM_QUANTITY: 'cart/increaseCartItemQuantity'
 * export CART_REMOVE_FROM_CART: 'cart/increaseCartItemQuantity'
*/

import { createSlice } from "@reduxjs/toolkit";

function findItemIndex(state, productId) {
    return state.findIndex((cartItem) => cartItem.productId === productId);
}

const slice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart(state, { type, payload }) {
            const existingItemIndex = findItemIndex(state, payload.productId);
            if (existingItemIndex !== -1) {
                state[existingItemIndex].quantity += 1
            } else {
                state.push({ ...payload, quantity: 1 });
            }
        },
        removeFromCart(state, { type, payload }) {
            const existingItemIndex = findItemIndex(state, payload.productId);
            state.splice(existingItemIndex, 1)
        },
        increaseCartItemQuantity(state, { type, payload }) {
            const existingItemIndex = findItemIndex(state, payload.productId);
            state[existingItemIndex].quantity += 1
        },
        decreaseCartItemQuantity(state, { type, payload }) {
            console.log('type', type)
            console.log('payload', payload)
            const existingItemIndex = findItemIndex(state, payload.productId);
            state[existingItemIndex].quantity -= 1
            if (state[existingItemIndex].quantity === 0) {
                state.splice(existingItemIndex, 1);
            }
        }

    }
})

export const { addToCart, removeFromCart, increaseCartItemQuantity, decreaseCartItemQuantity } = slice.actions;


export default slice.reducer