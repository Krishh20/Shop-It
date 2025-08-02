import { Children, createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";
const CartContext = new createContext();

const CartProvider = ( {children} ) => {
  const initialState = {
    cart: JSON.parse(localStorage.getItem('cart'))  || [], //string to back array
  };
  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);
  return <CartContext.Provider value={{cartState,cartDispatch}}>{children}</CartContext.Provider>;
};
const useCart=()=>{
    return useContext(CartContext)
}
export {CartProvider,useCart}