import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CartIcon from '../assets/cart-icon.svg'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsData } from '../store/slices/productsSlice';
import { fetchCartData } from '../store/slices/cartSlice';

export default function Header() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProductsData())
        dispatch(fetchCartData())
        return () => {

        };
    }, []);

    const cartItems = useSelector(state => state.cartItems);
    const cartItemsLength = cartItems.list.reduce((acc, currentItem) => acc += currentItem.quantity, 0)
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