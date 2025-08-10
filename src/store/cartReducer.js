// Action Types
/**
 * We can write action types here for Eg: cart/increaseCartItemQuantity can be written as
 * export CART_INCREASE_CART_ITEM_QUANTITY: 'cart/increaseCartItemQuantity'
 * export CART_REMOVE_FROM_CART: 'cart/increaseCartItemQuantity'
*/



// Action Creators
export function addToCart(productData) {
    return { type: 'cart/addToCart', payload: { ...productData, quantity: 1 } }
}

export function removeFromCart(productId) {
    return { type: 'cart/removeFromCart', payload: { productId: productId } }
}

export function increaseCartItemQuantity(productId) {
    return { type: 'cart/increaseCartItemQuantity', payload: { productId: productId } }
}

export function decreaseCartItemQuantity(productId) {
    return { type: 'cart/decreaseCartItemQuantity', payload: { productId: productId } }
}

// Reducer

function cartReducer(state = [], { type, payload }) {
    switch (type) {
        case 'cart/addToCart':
            const existingItem = state.find((cartItem) => cartItem.productId === payload.productId);
            if (existingItem) {
                return [...state.map((cartItem) => {
                    if (cartItem.productId === payload.productId) {
                        return { ...cartItem, quantity: cartItem.quantity += 1 }
                    }
                    return cartItem;
                })]
            }
            return [...state, payload]
        case 'cart/removeFromCart':
            return state?.filter((cartItem) => cartItem.productId != payload.productId)

        case 'cart/increaseCartItemQuantity':
            return state.map((cartItem) => {
                if (cartItem.productId === payload.productId) {
                    cartItem.quantity += 1
                }
                return cartItem
            })
        case 'cart/decreaseCartItemQuantity':
            return state.map((cartItem) => {
                if (cartItem.productId === payload.productId) {
                    cartItem.quantity -= 1
                }
                return cartItem
            })?.filter((cartItem) => cartItem.quantity > 0);
        default:
            return state
    }
}

export default cartReducer;
