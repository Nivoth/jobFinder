import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import AboutUs from "./pages/about-us/AboutUs.jsx";
import Service from "./pages/service/Service.jsx";
import Layout from "./components/layout/Layout.jsx";
import Register from "./pages/auth/Register.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Products from "./pages/products/Products.jsx";
import ProductDetail from "./pages/product-detail/ProductDetail.jsx";
import Cart from "./pages/cart/Cart.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/product-detail",
        element: <ProductDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "register",
    element: <Register />,
  },
  // {
  //   path: "/about-us",
  //   element : <AboutUs/>
  // },
  // {
  //   path: "/service",
  //   element : <Service/>
  // }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
