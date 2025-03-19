import React from "react";
import { AuthProvider } from "../context/AuthContext";
import { CartProvider } from "../context/CartContext";
import { AppInitializer } from "../context/AppInitializer";

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <CartProvider>
        <AppInitializer>{children}</AppInitializer>
      </CartProvider>
    </AuthProvider>
  );
}
