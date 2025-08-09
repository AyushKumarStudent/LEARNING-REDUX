import { products } from "../api/products";

const initialState = products

function productReducer(state = initialState, { type, payload }) {
    return state
}

export default productReducer;
