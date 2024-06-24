//old version of redux-react

// import { applyMiddleware, compose, legacy_createStore } from "redux";
// import { rootReducer } from "../reducer/rootReducer";
// import { thunk } from "redux-thunk";

// export const store = legacy_createStore(rootReducer , compose(applyMiddleware(thunk)));


// New version of redux-react using RTK reduxToolKit
import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "../features/cart/cartSlice";
export const store = configureStore({
    //call reducers from cartSlice
    reducer: {
        cart: cartSlice.reducer
    }
});