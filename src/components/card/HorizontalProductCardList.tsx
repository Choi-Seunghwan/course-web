import styled from "styled-components";
import OrderProductCard from "./HorizontalProductCard";
import { ProductModel } from "../../types/commerce.type";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

type HorizontalProductCardListProps = {
  items: { product: ProductModel; quantity: number }[];
};

export default function HorizontalProductCardList({
  items,
}: HorizontalProductCardListProps) {
  return (
    <ListContainer>
      {items.map((item, idx) => (
        <OrderProductCard
          key={idx}
          product={item.product}
          quantity={item.quantity}
        />
      ))}
    </ListContainer>
  );
}
