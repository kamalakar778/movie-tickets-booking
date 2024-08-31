// import React, { createContext, useEffect, useState } from 'react'

// export const Cart = createContext()

// const Context = ({ children }) => {
//     const [cart, setCart] = useState([]);
//     useEffect(() => {
//         // const fetchProducts = async () => {
//         //     const response = await fetch("https://fakestoreapi.com/products/1");
//         //     const fakeStoreProduct = await response.json();
//         //     // console.log(fakeStoreProduct)
//         //     setCart(fakeStoreProduct)
//         // }
//         // fetchProducts();
//     }, [])
//     return (
//         <Cart.Provider value={[cart, setCart]} >
//             {children}
//         </Cart.Provider>
//     )
// }

// export default Context