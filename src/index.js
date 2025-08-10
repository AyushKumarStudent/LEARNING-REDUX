import React from "react";
import App from "./App"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux"
import store from "./store/store";

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/cart',
                element: <Cart />,
            },
        ],
    },
])

const root = createRoot(document.querySelector("#root"));

root.render(
    <Provider store={store} >
        <RouterProvider router={router} />
    </Provider>
)