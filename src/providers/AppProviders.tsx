import React from "react";
import { AuthProvider } from "../context/AuthContext";
import { CartProvider } from "../context/CartContext";
import { AppInitializer } from "../context/AppInitializer";
import { OrderProvider } from "../context/OrderContext";

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <OrderProvider>
        <CartProvider>
          <AppInitializer>{children}</AppInitializer>
        </CartProvider>
      </OrderProvider>
    </AuthProvider>
  );
}
