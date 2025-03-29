import styled from "styled-components";

import {
  formatFullDateTime,
  formatKrw,
  formatOrderStatus,
} from "../../utils/format";
import strings from "../../strings/string";
import { OrderModel } from "../../types/commerce-model.type";
import HorizontalProductCardList from "./HorizontalProductCardList";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

const Info = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  color: #333;
  margin-bottom: 8px;
`;

const InfoText = styled.span`
  margin: 0;
  font-size: 13px;
  font-weight: 400;
  color: #333;
  margin-left: 10px;
  margin-top: 4px;
  margin-bottom: 8px;
`;

type HorizontalProductCardProps = {
  order: OrderModel;
};

export default function OrderHistoryCard({
  order,
}: HorizontalProductCardProps) {
  return (
    <Container>
      <div>
        <Info>
          {strings.ko.ORDER_NO} <InfoText>{order.orderNo}</InfoText>
        </Info>
        <Info>
          {strings.ko.ORDER_DATE}
          <InfoText> {formatFullDateTime(order.createdAt)}</InfoText>
        </Info>
        <Info>
          {strings.ko.ORDER_STATUS}
          <InfoText>{formatOrderStatus(order.status)}</InfoText>
        </Info>
        <Info>
          {strings.ko.ORDER_TOTAL}
          <InfoText style={{ fontSize: 15, fontWeight: 700, color: "#d9534f" }}>
            {formatKrw(order.totalPrice)}
          </InfoText>
        </Info>
      </div>

      <HorizontalProductCardList
        items={order.orderItems}
      ></HorizontalProductCardList>
    </Container>
  );
}
