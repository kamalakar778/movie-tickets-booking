// FavouritesProvider.js
import React, { useReducer } from 'react';
import FavouritesContext from './FavouritesContext';
import favouritesReducer from './favouritesReducer';

const FavouritesProvider = ({ children }) => {
    const [favourites, dispatch] = useReducer(favouritesReducer, []);

    return (
        <FavouritesContext.Provider value={{ favourites, dispatch }}>
            {children}
        </FavouritesContext.Provider>
    );
};

export default FavouritesProvider;
