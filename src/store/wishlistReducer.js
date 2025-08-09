function wishlistReducer(state = [], { type, payload }) {
    switch (type) {
        case 'wishlist/addToWishlist':
            return [...state, payload]
        case 'wishlist/removeFromWishlist':
            return state.filter((wishlistItem) => wishlistItem.productId != payload.productId)
        default:
            return state;
    }
}

//Action Creators
export function addToWishlist(productId, quantity) {
    return { type: 'wishlist/addToWishlist', payload: { productId: productId, quantity: quantity } }
}

export function removeFromWishlist(productId) {
    return { type: 'wishlist/removeFromWishlist', payload: { productId: productId } }
}

export default wishlistReducer;
