import { useEffect } from "react";
import { useAuthContext } from "./AuthContext";
import { getCartItems } from "../services/commerce.service"; // 카트 API 호출 함수
import { useCartContext } from "./CartContext";

export const AppInitializer = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, accessToken } = useAuthContext();
  const { setCart, clearCart } = useCartContext();

  useEffect(() => {
    const fetchCart = async () => {
      if (!isAuthenticated || !accessToken) {
        clearCart();
        return;
      }

      try {
        const cartItems = await getCartItems();
        setCart(cartItems);
      } catch (err: any) {
        console.error("Cart fetch error", err);
      }
    };

    fetchCart();
  }, [isAuthenticated, accessToken]);

  return <>{children}</>;
};
