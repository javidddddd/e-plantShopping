import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const incoming = action.payload;
      const existing = state.items.find((it) => it.name === incoming.name);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...incoming, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const { name } = action.payload;
      state.items = state.items.filter((it) => it.name !== name);
    },
    updateQuantity: (state, action) => {
      const { name, amount } = action.payload;
      const item = state.items.find((it) => it.name === name);
      if (item) item.quantity = amount;
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
