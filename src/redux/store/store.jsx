import { configureStore } from '@reduxjs/toolkit'
import homeproduct from '../slices/homeproduct'

import cartslice from '../slices/cartslice'
import productslice from "../slices/productslice"

const store = configureStore({
  reducer: {
    homeupcoming: homeproduct,
    products: productslice,
    cart: cartslice
  },
})

export default store
