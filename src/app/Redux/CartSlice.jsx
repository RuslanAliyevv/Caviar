"use client";
import { createSlice } from "@reduxjs/toolkit";

const getInitialCartState = () => {
  try {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  } catch (error) {
    console.error("Error parsing cart data from localStorage:", error);
    return [];
  }
};

const cartSlice = createSlice({
  name: "Cart",
  initialState: getInitialCartState(),
  reducers: {
    updateCart: (state, action) => {
      return action.payload;
    },
    add(state, action) {
      const existingItem = state.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.count += 1;
      } else {
        state.push({ ...action.payload, count: 1 });
      }

      try {
        localStorage.setItem("cart", JSON.stringify(state));
      } catch (error) {
        console.error("Error storing cart data in localStorage:", error);
      }
    },

    remove(state, action) {
      const updatedCart = state.filter((item) => item.id !== action.payload);

      try {
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      } catch (error) {
        console.error("Error storing cart data in localStorage:", error);
      }

      return updatedCart;
    },

    updateCart(state, action) {
      try {
        localStorage.setItem("cart", JSON.stringify(action.payload));
      } catch (error) {
        console.error("Error storing cart data in localStorage:", error);
      }

      return action.payload;
    },
  },
});

export const { add, remove, updateCart } = cartSlice.actions;
export default cartSlice.reducer;
