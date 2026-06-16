import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './slices/products'
import cartReducer from './slices/cart'
import wishlistReducer from './slices/wish'
export const store = configureStore({
    reducer:{
        products:productsReducer,
        cart:cartReducer,
        wish:wishlistReducer

    }
})