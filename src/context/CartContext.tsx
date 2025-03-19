import { createContext, useContext, useReducer, ReactNode } from "react";
import { CartModel } from "../types/commerce.type";

const initialState = {
  cart: [],
};

type CartAction =
  | { type: "SET_CART"; payload: CartModel[] }
  | { type: "CLEAR_CART" };

function cartReducer(state: any, action: CartAction) {
  switch (action.type) {
    case "SET_CART":
      return { ...state, cart: [...action.payload] };
    case "CLEAR_CART":
      return { ...state, cart: [] };
    default:
      return state;
  }
}

const CartContext = createContext<any>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const setCart = (items: CartModel[]) =>
    dispatch({ type: "SET_CART", payload: items });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  return (
    <CartContext.Provider value={{ cart: state.cart, setCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
