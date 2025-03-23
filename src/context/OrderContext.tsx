import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { ProductModel } from "../types/commerce.type";

type OrderState = {
  orderItems: ProductModel[];
};

const initialState: OrderState = {
  orderItems: [],
};

function orderReducer(state: OrderState, action: any) {
  switch (action.type) {
    case "SET_ORDER_ITEMS":
      return { ...state, orderItems: action.payload };
    case "CLEAR_ORDER_ITEMS":
      return { ...state, orderItems: [] };
    default:
      return state;
  }
}

const OrderContext = createContext<any>(undefined);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(orderReducer, initialState);

  const setOrderItems = (items: ProductModel[]) =>
    dispatch({ type: "SET_ORDER_ITEMS", payload: items });
  const clearOrder = () => dispatch({ type: "CLEAR_ORDER_ITEMS" });

  return (
    <OrderContext.Provider value={{ ...state, setOrderItems, clearOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => {
  const context = useContext(OrderContext);
  if (!context)
    throw new Error("useOrderContext must be used within OrderProvider");
  return context;
};
