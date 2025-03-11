import {
  getProduct as getProductApi,
  getProducts as getProductsApi,
} from "../services/commerce.service";
import { PagingQuery } from "../types/api.type";

export const useCommerce = () => {
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

  return {
    getProducts,
    getProductDetail,
  };
};
