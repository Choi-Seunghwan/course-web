import styled from "styled-components";
import MainBanner from "../components/banner/MainBanner";
import CategoryTabs from "../components/tab/CategoryTabs";
import PrimaryTitle from "../components/title/PrimaryTitle";

import ProductCardList from "../components/card/ProductCardList";
import { useCommerce } from "../hooks/useCommerce";
import { ProductModel } from "../types/commerce.type";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NewArrivalWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 28px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const ProductCardListContainer = styled.div`
  margin: 20px 20px;
`;

export default function Main() {
  const { getProducts } = useCommerce();
  const [products, setProducts] = useState<ProductModel[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProducts({ page: 1, size: 6 }).then((res) => setProducts(res.items));
  }, []);

  const handleCardClick = (id: number) => {
    navigate(`/product-detail?productId=${id}`);
  };

  return (
    <Container>
      <MainBanner />
      <NewArrivalWrap>
        <PrimaryTitle title="NEW ARRIVAL" />
        <CategoryTabs />
        <ProductCardListContainer>
          <ProductCardList items={products} onCardClick={handleCardClick} />
        </ProductCardListContainer>
      </NewArrivalWrap>
    </Container>
  );
}
