import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from '../components/Cart/CartSlice';
import productReducer from '../components/ProductsIndex/ProductSlice';
const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;