import { combineReducers } from 'redux';

import productsListReducer from "./productsListReducer";
import cartReducer from "./cartReducer";
import selectedProductsReducer from "./selectedProductsReducer";

let combinedReducer = combineReducers({
    // редьюсер countersReducer отвечает за раздел state под именем counters
    products: productsListReducer,
    cart: cartReducer, 
    selectedProducts: selectedProductsReducer,
});

export default combinedReducer;
