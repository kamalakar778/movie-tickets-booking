import React, { createContext, useContext, useState } from "react";
import { useReducer } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // state.map(product => { console.log(product.title) })
      return { ...state, cart: action.cartProduct };
      console.log(state);
    case "REMOVE_FROM_CART":
      return { ...state, cart: state.filter((item) => item.id !== action.id) };
    default:
      throw new Error(`unknown error ${action.type}`);
    // case "ADD_TO_CART":
    //     return [...state, action.item];
    // case "REMOVE_FROM_CART":
    //     return [...state, action.item]
    // default:
    //     throw new Error(`unknown error ${action.type}`)
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
    faviourate: [],
  });

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(CartStateContext);
export const useCartDispatcher = () => useContext(CartDispatchContext);

export default CartProvider;
