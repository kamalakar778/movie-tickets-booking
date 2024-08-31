// favouritesReducer.js
const favouritesReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVOURITES':
            return [...state, action.product];
        default:
            return state;
    }
};

export default favouritesReducer;
