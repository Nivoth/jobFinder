// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllproduct } from "../../redux/action/productAction";

// export default function Products() {
//   const dispatch = useDispatch();

//   const {products} = useSelector((state) => state.productR) 
//   //dispatch action to reducer
//   useEffect(() => {
//     dispatch(getAllproduct);
//   }, []);
// return (
//     <div>
//         {products.map((product,index) => (
//             <div key={index}>
//                 <h1>{product.title}</h1>
//             </div>
//         ))}
//     </div>
// )
// }
import React from 'react'

export default function products() {
  return (
    <div>products</div>
  )
}
