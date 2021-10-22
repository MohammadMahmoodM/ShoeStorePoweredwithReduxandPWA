import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: CartItem[] = [ ]

    // const getItemIndex = (state: CartItem[], idToFind: string): number => {
    //     const ids = state.map(item => item.id);
    //     return ids.indexOf(idToFind);
    // }

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {


        // addToCart(state, action: PayloadAction<CartItem>) {
        //     const itemIndex = getItemIndex(state, action.payload.id);
        //     if (itemIndex && itemIndex < 0)
        //         state.push(action.payload);
        //     else
        //         state[itemIndex].quantity += action.payload.quantity;
        // },
       
    },
});

export const {
    
} = cartSlice.actions;
export default cartSlice.reducer;