import styled from "styled-components";
import CartCard, { CartCardProps } from "./CartCard";
import { CartModel } from "../../types/commerce-model.type";

const CartCardListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function CartCardList(props: {
  items: CartCardProps[];
  onIncrease: (cartId: CartModel) => void;
  onDecrease: (cartId: CartModel) => void;
}) {
  return (
    <CartCardListContainer>
      {props.items.map((item, index) => (
        <CartCard
          key={index}
          {...item}
          onIncrease={props.onIncrease}
          onDecrease={props.onDecrease}
        />
      ))}
    </CartCardListContainer>
  );
}
