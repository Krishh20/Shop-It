import { createContext, useContext, useReducer } from "react";
import wishlistReducer from "../reducers/wishlistReducer";
const WishlistContext= new createContext()
const initialState={
wishlist:JSON.parse(localStorage.getItem('wishlist'))  || []
}
const WishlistProvider=({children})=>{
    const [{wishlist}, wishlistDispatch]=useReducer(wishlistReducer,initialState)
return <WishlistContext.Provider value={{wishlist,wishlistDispatch}}>
    {children}
</WishlistContext.Provider>
}

const useWishlist=()=>{
return useContext(WishlistContext)
}
export {useWishlist,WishlistProvider}