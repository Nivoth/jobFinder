// import React, { useEffect } from "react";
// import { useState } from "react";
// import { useLocation } from "react-router-dom";
// export default function ProductDetail() {
//   const [ProductDetail, setProductDetail] = useState({});
//   const location = useLocation();

//   useEffect(() => {
//     setProductDetail(location.state);
//   }, []);
//   return (
//     <a
//       href="#"
//       className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
//     >
//       <img
//         className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
//         src={ProductDetail.images ? ProductDetail.images : "https://dummyimage.com/720x400"}
//         alt=""
//       />
//       <div className="flex flex-col justify-between p-4 leading-normal">
//         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//             {ProductDetail.title ? ProductDetail.title : "Title"}
//         </h5>
//         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//             {ProductDetail.description ? ProductDetail.description : "Description"}
//         </p>
//       </div>
//     </a>
//   );
// }

import React from 'react'

export default function ProductDetail() {
  return (
    <div>ProductDetail</div>
  )
}
