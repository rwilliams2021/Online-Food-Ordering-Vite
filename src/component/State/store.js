import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from "./Authentication/Reducer"
import { restaurantReducer } from "./Restaurant/Reducer"
import menuItemReducer from "./Menu/Reducer"
import cartReducer from "./Cart/Reducer"
import orderReducer from "./Order/Reducer"
import restaurantOrderReducer from "./Restaurant Order/Reducer"
import ingredientReducer from "./Ingredient/Reducer"
import {thunk} from "redux-thunk";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        restaurant: restaurantReducer,
        menu: menuItemReducer,
        cart: cartReducer,
        order: orderReducer,
        restaurantOrder: restaurantOrderReducer,
        ingredient: ingredientReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})