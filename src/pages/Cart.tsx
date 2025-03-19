import styled from "styled-components";
import SecondaryTitle from "../components/title/SecondaryTitle";
import FullWidthButton from "../components/button/FullWidthButton";
import CartCardList from "../components/card/CartCardList";
import { useCartContext } from "../context/CartContext";
import { useEffect } from "react";
import { useCommerce } from "../hooks/useCommerce";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 185px);
`;

const TitleWrap = styled.div`
  width: 100%;
  margin: 10px 0 auto 20px;
`;

const CartContentWrap = styled.div``;

const CartCardListWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

export default function Cart() {
  const { cart } = useCartContext();

  const handleIncrease = (id: number) => {};
  const handleDecrease = (id: number) => {};

  return (
    <Container>
      <TitleWrap>
        <SecondaryTitle title="CART"></SecondaryTitle>
      </TitleWrap>

      {cart.length > 0 ? (
        <CartContentWrap>
          <CartCardListWrap>
            <CartCardList
              items={cart}
              onIncrease={(id) => handleIncrease(id)}
              onDecrease={(id) => handleDecrease(id)}
            />
          </CartCardListWrap>
        </CartContentWrap>
      ) : (
        <CartContentWrap>
          <p>EMPTY</p>
        </CartContentWrap>
      )}

      <FullWidthButton label="BUY NOW" onClick={() => {}}></FullWidthButton>
    </Container>
  );
}
