import { create } from 'zustand'
import { persist } from "zustand/middleware"

let store = (set) => ({
  cart: 5,
  add: (state) => set({ cart: state.cart + 1 }),
  remove: (state) => state.cart - 1,
  clearAll: () => set({ cart: 0 }),
  addPost: (newPost) => set((state) => {
    return { posts: [...state.posts, newPost] }
  }),
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
})

store = persist(store, { name: "cart" })

export const useCartStore = create(store)