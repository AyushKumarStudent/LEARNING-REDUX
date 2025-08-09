import { useState, useEffect } from "react";
import React from "react";
import store from "./store/store";
import { addToCart, removeFromCart, increaseCartItemQuantity, decreaseCartItemQuantity } from "./store/cartReducer";
import { addToWishlist, removeFromWishlist } from "./store/wishlistReducer";
import "./App.css";

export default function App() {

    const [products, setProducts] = useState(store.getState())

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setProducts(store.getState())
        });
        return () => {
            unsubscribe()
        };
    }, []);
    console.log('store.getState().cartItems', store.getState().cartItems)
    return <>
        <button onClick={() => {
            store.dispatch(addToCart("1", 1))
            store.dispatch(addToCart("2", 10))
            store.dispatch(addToCart("3", 15))
        }}>Add to Cart</button>

        <button onClick={() => {
            store.dispatch(removeFromCart("1"))
        }}>Remove from Cart</button>

        <button onClick={() => {
            store.dispatch(increaseCartItemQuantity("2"))
        }}>Increase Cart item Quantity</button>

        <button onClick={() => {
            store.dispatch(decreaseCartItemQuantity("2"))
        }}>Decrease Cart item Quantity</button>

        <button onClick={() => {
            store.dispatch(addToWishlist("5", 20))
            store.dispatch(addToWishlist("15", 15))
            store.dispatch(addToWishlist("20", 1))
        }}>Add to wishlist</button>

        <button onClick={() => {
            store.dispatch(removeFromWishlist("15"))
        }}>Remove from wishlist</button>
        <h3>
            Cart Items
        </h3>
        {store.getState().cartItems.map((cartItem) => {
            return (<div key={cartItem.productId}>
                <div>Product{cartItem.productId}</div>
                <div>Quantity{cartItem.quantity}</div>
            </div>)
        })}

        <h3>wishlist</h3>
        {store.getState().wishlist.map((wishlistItem) => {
            return (<div key={wishlistItem.productId}>
                <div>Product{wishlistItem.productId}</div>
                <div>Quantity{wishlistItem.quantity}</div>
            </div>)
        })}
    </>
}
