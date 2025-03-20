import { useCartContext } from "../context/CartContext";
import {
  getProduct as getProductApi,
  getProducts as getProductsApi,
  getCartItems as getCartItemsApi,
  addToCart as addToCartApi,
  updateCartQuantity as updateCartQuantityApi,
  removeFromCart as removeFromCartApi,
} from "../services/commerce.service";
import { PagingQuery } from "../types/api.type";

export const useCommerce = () => {
  const { setCart, clearCart } = useCartContext();

  const getProducts = async (paging: PagingQuery) => {
    try {
      const result = await getProductsApi({
        page: paging.page,
        size: paging.size,
      });

      return result;
    } catch (e) {
      throw e;
    }
  };

  const getProductDetail = async (productId: number) => {
    try {
      const result = await getProductApi(productId);
      return result;
    } catch (e) {
      throw e;
    }
  };

  const getCartItems = async () => {
    try {
      const result = await getCartItemsApi();

      setCart(result);

      return result;
    } catch (e) {
      throw e;
    }
  };

  const addToCart = async (productId: number, quantity: number) => {
    try {
      const result = await addToCartApi(productId, quantity);
      return result;
    } catch (e) {
      throw e;
    }
  };

  const updateCartQuantity = async (cartId: number, quantity: number) => {
    try {
      const result = await updateCartQuantityApi(cartId, quantity);
      return result;
    } catch (e) {
      throw e;
    }
  };

  const removeFromCart = async (cartId: number) => {
    try {
      const result = await removeFromCartApi(cartId);
      return result;
    } catch (e) {
      throw e;
    }
  };

  return {
    getProducts,
    getProductDetail,
    getCartItems,
    addToCart,
    updateCartQuantity,
    removeFromCart,
  };
};
