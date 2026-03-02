import { createSlice } from "@reduxjs/toolkit";

const emptyCart = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: emptyCart,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.totalAmount += action.payload.price;
    },
    removeItem: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.totalAmount -= item.price;
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
