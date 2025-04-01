import styled from "styled-components";
import tempImage from "../../assets/temp-image.png";
import { formatKrw } from "../../utils/format";
import { ProductModel } from "../../types/commerce-model.type";

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

export type ProductCardProps = ProductModel & {
  width?: number;
  height?: number;
  onClick?: () => any;
};

export default function ProductCard(props: ProductCardProps) {
  const handleClick = () => {
    props.onClick && props.onClick();
  };

  return (
    <Container onClick={handleClick}>
      <img
        src={props.images?.[0] || tempImage}
        style={{
          width: `${props.width || 170}px`,
          height: `${props.height || 200}px`,
          objectFit: "cover",
          borderRadius: "8px",
        }}
      ></img>
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
