import styled from "styled-components";
import tempImage from "../../assets/temp-image.png";
import { formatKrw } from "../../utils/format";
import { CartModel } from "../../types/commerce-model.type";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

const Image = styled.img`
  width: 100px;
  height: 133px;
  object-fit: cover;
  margin-right: 16px;
`;

const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const NameText = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
`;

const PriceText = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #d9534f;
  margin-top: 8px;
`;

const QuantityWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const QuantityButton = styled.button`
  width: 24px;
  height: 24px;
  border: 1px solid #ccc;
  background: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export type CartCardProps = CartModel & {
  onIncrease?: (cartId: CartModel) => void;
  onDecrease?: (cartId: CartModel) => void;
};

export default function CartCard(props: CartCardProps) {
  const handleIncrease = () => {
    props.onIncrease && props.onIncrease(props);
  };

  const handleDecrease = () => {
    props.onDecrease && props.onDecrease(props);
  };

  return (
    <Container>
      <Image src={props.product?.images?.[0] || tempImage} />

      <InfoWrap>
        <NameText>{props.product?.name}</NameText>
        {/* <DescText>{props.product?.description}</DescText> */}

        <QuantityWrap>
          <QuantityButton onClick={handleDecrease}>−</QuantityButton>{" "}
          {/* 유니코드 minus */}
          <div>{props.quantity}</div>
          <QuantityButton onClick={handleIncrease}>＋</QuantityButton>{" "}
          {/* 유니코드 plus */}
        </QuantityWrap>

        <PriceText>{formatKrw(props.product?.price || 0)}</PriceText>
      </InfoWrap>
    </Container>
  );
}
