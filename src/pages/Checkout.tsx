import { useOrderContext } from "../context/OrderContext";
import styled from "styled-components";
import { formatKrw } from "../utils/format";
import FullWidthButton from "../components/button/FullWidthButton";
import { useNavigate } from "react-router-dom";
import PrimaryTitle from "../components/title/PrimaryTitle";
import { Divider } from "@mui/material";
import HorizontalProductCardList from "../components/card/HorizontalProductCardList";
import { OrderProductData } from "../types/commerce.type";
import { useCommerce } from "../hooks/useCommerce";
import { getOrderSummaryText } from "../utils/get-order-summary-text";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh - 185px);
`;

const TitleWrap = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70%;
  padding: 10px;
`;

const CardListWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 10px;
  overflow: auto;
`;

const AddressWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin: 0px;
`;

const PaymentMethodWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin: 0px;
`;

const BottomWrap = styled.div`
  width: 100%;
  height: 110px;
  padding: 10px;
  margin-top: auto;
`;

const TotalWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
`;

const TotalText = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #d9534f;
  margin-top: 8px;
`;

export default function Checkout() {
  const { orderItems, clearOrder } = useOrderContext();
  const { order, pay } = useCommerce();

  const navigate = useNavigate();

  const payNowButtonHandler = async () => {
    const totalPrice = orderItems.reduce(
      (acc: number, cur: OrderProductData) =>
        acc + (cur?.product?.price || 0) * cur.quantity,
      0
    );

    const paymentKey = await order({
      totalPrice,
      orderProducts: orderItems.map((item: OrderProductData) => ({
        productId: item.product.id,
        quantity: item.quantity,
      })),
    });

    await pay({
      orderName: getOrderSummaryText(
        orderItems.map((item: OrderProductData) => item.product.name)
      ),
      paymentKey,
      totalAmount: totalPrice,
    });

    alert("결제가 완료되었습니다.");
    navigate("/my");
  };

  //TODO unmount order 삭제

  return (
    <Container>
      <p></p>
      <TitleWrap>
        <PrimaryTitle title="CHECKOUT"></PrimaryTitle>
      </TitleWrap>

      <ContentWrap>
        <AddressWrap>
          <p
            style={{ fontSize: "16px", fontWeight: "700", marginBottom: "4px" }}
          >
            배송지
          </p>
          <p style={{ fontSize: "14px", fontWeight: "400", marginTop: "0px" }}>
            서울특별시 중구 세종대로 110 <br /> (012-000) 테스트 우리집
          </p>
          <Divider />
        </AddressWrap>
        {/* <PaymentMethodWrap>
          <p
            style={{ fontSize: "16px", fontWeight: "700", marginBottom: "4px" }}
          >
            결제수단
          </p>
          <Divider />
        </PaymentMethodWrap> */}
        <CardListWrap>
          <HorizontalProductCardList
            items={orderItems}
          ></HorizontalProductCardList>
        </CardListWrap>
      </ContentWrap>

      <BottomWrap>
        <TotalWrap>
          <p>TOTAL</p>
          <TotalText>
            {formatKrw(
              orderItems.reduce(
                (acc: number, cur: OrderProductData) =>
                  acc + (cur?.product?.price || 0) * cur.quantity,
                0
              )
            )}
          </TotalText>
        </TotalWrap>

        <FullWidthButton
          label="PAY NOW"
          onClick={payNowButtonHandler}
        ></FullWidthButton>
      </BottomWrap>
    </Container>
  );
}
