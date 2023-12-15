"use client"
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: JSON.parse(localStorage.getItem("cart")) || [],
  reducers: {
    add(state, action) {
      const existingItem = state.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.count += 1;
      } else {
        state.push({ ...action.payload, count: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(state));
    },
    
    remove(state, action) {
      const updatedCart = state.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    },
    updateCart(state, action) {
      return action.payload;
    },
  },
  
});

export const { add, remove, updateCart } = cartSlice.actions;
export default cartSlice.reducer;