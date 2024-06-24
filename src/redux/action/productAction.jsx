//Old version of redux-react

import axios from "axios";
import { BASE_URL } from "../api";
export const getAllproduct = (products) => {
    return(dispatch) => {
        axios(`${BASE_URL}products`)
        .then((response) => {
            dispatch({
                type: actionType.GET_PRODUCTS,
                payload: response.data.products
            })
        })
        .catch((error) => {
            console.log(error)
        })
    };
};