import styled from "styled-components";
import { OrderModel } from "../../types/commerce-model.type";
import OrderHistoryCard from "./OrderHistoryCard";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 1px solid #ccc;
  padding: 8px;
  border-radius: 8px;
`;

type HorizontalProductCardListProps = {
  items: OrderModel[];
};

export default function OrderHistoryCardList({
  items,
}: HorizontalProductCardListProps) {
  return (
    <ListContainer>
      {items.map((item, idx) => (
        <OrderHistoryCard key={idx} order={item} />
      ))}
    </ListContainer>
  );
}
