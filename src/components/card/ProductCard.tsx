import styled from "styled-components";
import tempImage from "../../assets/temp-image.png";
import { formatKrw } from "../../utils/format";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const NameText = styled.div`
  margin: 0;
  padding: 0;
  font-size: 14px;
  color: #333;
`;

const PriceText = styled.div`
  margin: 0;
  padding: 0;
  font-size: 12px;
  font-weight: 700;
  color: #333;
`;

export type ProductCardProps = {
  width?: number;
  height?: number;
  name: string;
  price: number;
  imageUrl?: string;
};

export default function ProductCard(props: ProductCardProps) {
  return (
    <Container>
      <img src={tempImage}></img>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          paddingTop: "4px",
        }}
      >
        <NameText>{props.name}</NameText>
        <PriceText>{formatKrw(props.price)}</PriceText>
      </div>
    </Container>
  );
}
