import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../utils';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [] as IProduct[],
    reducers: {
        addToCart: (state, action) => {
        },

        updateQuantity: (state, action) => {
            const items = state.find(({ id }) => id === action.payload.id);
            console.log('state >> items >> ', items);            
        },

        removeFromCart: (state, action) => {
        },
    },
});
