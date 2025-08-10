const apiMiddleware = ({ dispatch }) => (next) => (action) => {
    const BASE_URL = 'https://fakestoreapi.com';

    if (action.type === "api/makeCall") {
        next(action);
        const { URL, onSuccess, onStart, onError } = action.payload;
        dispatch({
            type: onStart
        })
        fetch(`${BASE_URL}/${URL}`).then((res) => res.json())
            .then((data) => dispatch({
                type: onSuccess,
                payload: data
            }))
            .catch((e) => dispatch({
                type: onError,
            }))

    } else {
        next(action)
    }
}
export default apiMiddleware

// API action creator
export function fetchData(payload) {
    return { type: "api/makeCall", payload }
}