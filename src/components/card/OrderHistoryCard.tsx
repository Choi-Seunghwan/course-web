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

const InfoText = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  color: #333;
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
        <InfoText>
          {strings.ko.ORDER_NO} {order.orderNo}
        </InfoText>
        <InfoText>
          {strings.ko.ORDER_DATE} {formatFullDateTime(order.createdAt)}
        </InfoText>
        <InfoText>
          {strings.ko.ORDER_STATUS} {order.status}
        </InfoText>
        <InfoText>
          {strings.ko.ORDER_STATUS} {formatOrderStatus(order.status)}
        </InfoText>
        <InfoText>
          {strings.ko.ORDER_TOTAL} {formatKrw(order.totalPrice)}
        </InfoText>
      </div>

      <HorizontalProductCardList
        items={order.orderItems}
      ></HorizontalProductCardList>
    </Container>
  );
}
