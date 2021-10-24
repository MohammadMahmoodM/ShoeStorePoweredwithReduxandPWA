import { createSlice } from '@reduxjs/toolkit';

const initialState: CartItem[] = [ ]

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {  // Define a Reducer Here
       
    },
});

export const {
    
} = cartSlice.actions;
export default cartSlice.reducer;