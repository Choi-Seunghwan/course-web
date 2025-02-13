import React from "react";
import { AuthProvider } from "../context/AuthContext";

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      {/* <ProductProvider>
        <CartProvider>{children}</CartProvider>
      </ProductProvider> */}
      {children}
    </AuthProvider>
  );
};

export default AppProviders;
