import { useCartContext } from "../context/CartContext";
import {
  getProduct as getProductApi,
  getProducts as getProductsApi,
  getCartItems as getCartItemsApi,
  addToCart as addToCartApi,
  updateCartQuantity as updateCartQuantityApi,
  removeFromCart as removeFromCartApi,
  requestPayment,
  order as orderApi,
  completePayment,
  getOrders as getOrdersApi,
} from "../services/commerce.service";
import { PagingQuery } from "../types/api.type";
import { OrderData } from "../types/commerce.type";
import { requestPortOnePayment } from "../utils/request-portone-payment";

export const useCommerce = () => {
  const { setCart } = useCartContext();

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

      await getCartItems();

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

  const order = async (data: OrderData): Promise<string> => {
    try {
      const orderRes = await orderApi(data);
      const requestPaymentRes = await requestPayment(orderRes.id);

      return requestPaymentRes.paymentKey;
    } catch (e) {
      throw e;
    }
  };
  const pay = async (data: {
    orderName: string;
    paymentKey: string;
    totalAmount: number;
  }) => {
    await requestPortOnePayment({
      orderName: data.orderName,
      paymentId: data.paymentKey,
      totalAmount: data.totalAmount,
      payMethod: "CARD",
    });

    await completePayment(data.paymentKey);
  };

  const getOrders = async () => {
    try {
      const result = await getOrdersApi();
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
    order,
    pay,
    getOrders,
  };
};
