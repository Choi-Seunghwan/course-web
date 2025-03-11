import styled from "styled-components";
import ProductCard, { ProductCardProps } from "./ProductCard";

const ProductCardListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  justify-content: space-between;
`;

export default function ProductCardList(props: {
  items: ProductCardProps[];
  onCardClick: (id: number) => any;
}) {
  return (
    <ProductCardListContainer>
      {props?.items
        ? props.items.map((item, index) => {
            return (
              <ProductCard
                key={index}
                {...item}
                width={165}
                height={200}
                onClick={() => props.onCardClick(item.id)}
              ></ProductCard>
            );
          })
        : ""}
    </ProductCardListContainer>
  );
}
