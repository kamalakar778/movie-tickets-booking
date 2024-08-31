import React, { createContext, useContext, useEffect, useReducer } from "react";
import { NavLink } from "react-bootstrap";
import Header from "./Header";
import { useCartDispatcher } from "./Cart";
import CartPage from "../pages/Cart";
import { Cart } from "./archive/Context1";
import movieReducer from "./Reducer";
 
const initialState = {
  movies: [],
  cart: [],
  checkout: [],
};

// Create the context
export const MoviesContext = createContext();

// Context provider component
const Context = ({ children }) => {
  // const dispatch1 = useCartDispatcher();

  const [state, dispatch] = useReducer(movieReducer, initialState);


  useEffect(() => {    
    fetch("https://freetestapi.com/api/v1/movies")
    // fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "SET_MOVIES", movies: data });
        console.log(data)
      });
  }, []);

  return (
    <>
      <MoviesContext.Provider value={[state, dispatch]}>
        {children}
      </MoviesContext.Provider>
    </>
  );
};

export default Context;

