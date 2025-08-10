import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import CartIcon from '../assets/cart-icon.svg'
import { useSelector } from 'react-redux'

export default function Header() {
    const cartItems = useSelector(state => state.cartItems);
    const cartItemsLength = cartItems.reduce((acc, currentItem) => acc += currentItem.quantity, 0)
    return (
        <header>
            <div className="header-contents">
                <h1>
                    <Link to="/">Shopee</Link>
                </h1>
                <Link className="cart-icon" to="/cart">
                    <img src={CartIcon} alt="cart-icon" height={"50px"} width={"50px"} />
                    <div className="cart-items-count">{cartItemsLength}</div>
                </Link>
            </div>
        </header>
    )
}