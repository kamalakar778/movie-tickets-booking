// import logo from './logo.svg';
// import './App.css';

// import './App.css';
// import Header from '../Header';
// import Footer from '../Footer'
// // import Products from './components/ProductDetail'
// import Signup from '../Signup';
// import Signin from '../Signin';
// // import ProductDetail from './components/ProductDetail';
// import Favourites from '../Favourites'
// import Reducers from "../Reducers"
// import ProductsPage from "../ProductsPage"
// import CartPage from "./CartPage1"
// import {
//   BrowserRouter as Router, Redirect, Route, Switch, useLocation
// } from "react-router-dom";
// import Home from '../Home';

// // import About from './components/About'
// // import Contact from './components/Contact'
// import React, { createContext, useState, useEffect, useReducer } from 'react';
// // import ProductDetail from './components/ProductDetail';
// // import Checkout from './components/Checkout'

// export const store = createContext();


// function App() {

//   // const [category, setCategory] = useState([]);

//   // const [data, setData] = useState([]);
//   // const [state, dispatch] = useReducer(Reducers, { data, Cart: [] });
//   // useEffect(() => {
//   //   const fetchProducts = async () => {
//   //     const response = await fetch("https://fakestoreapi.com/products");
//   //     const fakeStoreProducts = await response.json();
//   //     console.log(fakeStoreProducts)
//   //     setData(fakeStoreProducts)
//   //     const categoryResponse = await fetch("https://fakestoreapi.com/category");
//   //     const category = await categoryResponse.json();
//   //     console.log(category)
//   //     setCategory(category)
//   //   };
//   //   fetchProducts();
//   // }, []);
//   return (
//     <>

//       {/* <store.Provider value={[data, setData]} > */}
//       <Switch>

//         <Route exact path="/" component={Home} />
//         <Route path='/Sign-Up' component={Signup} />
//         <Route path='/Sign-In' component={Signin} />
//         {/* <Route exact path="/products" component={Products} /> */}
//         <Route path="/ProductsPage" component={ProductsPage} />
//         {/* <Route exact path="/ProductDetail" component={ProductDetail} /> */}
//         <Route exact path="/cart" component={CartPage} />
//         <Route exact path="/favourites" component={Favourites} />
//         {/* <Route exact path="/products/:id" component={ProductDetail} /> */}
//         {/* <Route exact path="/checkout" component={Checkout} /> */}
//         {/* <Route exact path="/about" component={About} /> */}
//         {/* <Route exact path="/contact" component={Contact} /> */}
//         <Redirect to="/" />
//       </Switch>
//       {/* </store.Provider> */}
//     </>
//   );
// }


// export default App;
