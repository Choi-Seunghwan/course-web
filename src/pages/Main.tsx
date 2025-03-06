import styled from "styled-components";
import MainBanner from "../components/banner/MainBanner";
import CategoryTabs from "../components/tab/CategoryTabs";
import PrimaryTitle from "../components/title/PrimaryTitle";

import { ProductCardProps } from "../components/card/ProductCard";
import ProductCardList from "../components/card/ProductCardList";

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

const items: ProductCardProps[] = [
  {
    name: "hihihi",
    price: 3000,
  },
  {
    name: "hihihi",
    price: 3000,
  },
  {
    name: "hihihi",
    price: 3000,
  },
];

export default function Main() {
  return (
    <Container>
      <MainBanner />
      <NewArrivalWrap>
        <PrimaryTitle str="NEW ARRIVAL" />
        <CategoryTabs />
        <ProductCardListContainer>
          <ProductCardList items={items}></ProductCardList>
        </ProductCardListContainer>
      </NewArrivalWrap>
    </Container>
  );
}
