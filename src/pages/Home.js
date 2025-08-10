import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../components/Product'
import { getAllProducts, getProductsLoadingState, getProductsErrorState } from '../store/slices/productsSlice'
export default function Home() {
    const productsList = useSelector(getAllProducts)
    const isLoading = useSelector(getProductsLoadingState)
    const isError = useSelector(getProductsErrorState)

    return (
        <div className="products-container" >
            {isError ? <h2>{isError}</h2> : isLoading ? <h2 style={{ textAlign: "center" }}>Loading.....</h2> : productsList.map(({ id, title, rating, price, image }) => (
                <Product
                    productId={id}
                    key={id}
                    title={title}
                    rating={rating.rate}
                    price={price}
                    imageUrl={image}
                />
            ))}
        </div>
    )
}