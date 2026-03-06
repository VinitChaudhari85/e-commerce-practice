import { createSlice } from "@reduxjs/toolkit";

//create the initial state
const emptyCart = {
  items: [],
  totalAmount: 0,
};

//create the slice and pass name, initial state and actions
const cartSlice = createSlice({
  name: "cart",
  initialState: emptyCart,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      state.totalAmount += action.payload.price;
      state.totalAmount = parseFloat(state.totalAmount.toFixed(2));
    },
    removeItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload,
      );

      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        state.items = state.items.filter((item) => item.id !== action.payload);
      }

      state.totalAmount -= existingItem.price;
      state.totalAmount = parseFloat(state.totalAmount.toFixed(2));
    },
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

//export all the actions
export const { addItem, removeItem, clearCart } = cartSlice.actions;

//export the reducer as default
export default cartSlice.reducer;
