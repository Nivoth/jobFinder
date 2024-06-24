// Old version of redux-react
// import { actionType } from '../action/actionType';
// const initialState = {
//     products: [],
//     isLoading: false,
// }
// export const productReducer = (state= initialState, action) => {
//     let {GET_PRODUCTS} = actionType;
//     let {type, payload} = action;
//     switch(action.type) {
//         case actionType.GET_PRODUCTS:
//             return {
//                 ...state,
//                 products: payload
//             }
//         default:
//             return state;
//     }
// }