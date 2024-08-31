import React, { useReducer } from "react";

const movieReducer = (state, action) => {
  console.log("state.cart", state.cart.length);

  switch (action.type) {
    case "SET_MOVIES":
      return { ...state, movies: action.movies };
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.movie] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.movietId),
      };
    default:
      return state;
  }
};

export default movieReducer;
