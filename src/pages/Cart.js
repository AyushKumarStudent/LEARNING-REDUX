import React from 'react'
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'
import { getAllCartItems, getCartLoadingState, getCartErrorState } from '../store/slices/cartSlice';
export default function Cart() {
    const isLoading = useSelector(getCartLoadingState);
    const error = useSelector(getCartErrorState);

    const cartItems = useSelector(getAllCartItems)
    const total = Number(cartItems?.reduce((acc, { quantity, price }) => acc += (quantity * price), 0)?.toFixed(2))

    return (
        <div className="cart-container">
            <h2>Items in Your Cart</h2>
            <div className="cart-items-container">
                <div className="cart-header cart-item-container">
                    <div className="cart-item">Item</div>
                    <div className="item-price">Price</div>
                    <div className="quantity">Quantity</div>
                    <div className="total">Total</div>
                </div>
                {error ? <h2>{error}</h2> : isLoading ? <h2>Loading.......</h2> : cartItems?.map(({ id, title, rating, price, image, quantity }) => (
                    <CartItem
                        productId={id}
                        key={id}
                        title={title}
                        price={price}
                        quantity={quantity}
                        imageUrl={image}
                        rating={rating.rate}
                    />
                ))}
                {!isLoading && !error && <div className="cart-header cart-item-container">
                    <div className="total">${total}</div>
                </div>}
            </div>
        </div>
    )
}