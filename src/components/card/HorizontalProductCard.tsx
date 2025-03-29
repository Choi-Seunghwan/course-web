import styled from "styled-components";
import tempImage from "../../assets/temp-image.png";

import { formatKrw } from "../../utils/format";
import strings from "../../strings/string";
import { ProductModel } from "../../types/commerce-model.type";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

const Image = styled.img`
  width: 100px;
  height: 133px;
  object-fit: cover;
  border-radius: 8px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 8px;
`;

const Name = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #333;
`;

const Quantity = styled.div`
  font-size: 14px;
  color: #888;
`;

const Price = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #d9534f;
`;

type HorizontalProductCardProps = {
  product: ProductModel;
  quantity: number;
};

export default function HorizontalProductCard({
  product,
  quantity,
}: HorizontalProductCardProps) {
  return (
    <Container>
      <Image src={product?.images?.[0] || tempImage} />
      <Info>
        <Name>{product?.name}</Name>
        <Quantity>{`${strings.ko.QUANTITY} ${quantity}`}</Quantity>
        <Price>{formatKrw(product?.price)}</Price>
      </Info>
    </Container>
  );
}
