import styled from "styled-components";
import tempDetailImage from "../assets/temp-detail-image.png";
import Carousel from "react-material-ui-carousel";
import { useCommerce } from "../hooks/useCommerce";
import { useEffect, useState } from "react";
import { ProductModel } from "../types/commerce.type";
import { useLocation, useNavigate } from "react-router-dom";
import { formatKrw } from "../utils/format";
import PrimaryTitle from "../components/title/PrimaryTitle";
import ProductCardList from "../components/card/ProductCardList";
import { scrollTop } from "../utils/scroll";
import FullWidthButton from "../components/button/FullWidthButton";

const ProductDetailWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`;

const ImageWrap = styled.div`
  width: 100%;
  height: 460px;
  margin: 20px auto;
  text-align: center;
`;

const ProductInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`;

const NameText = styled.p``;

const PriceText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-weight: 700;
  color: #333;
`;

const DescriptionText = styled.div`
  margin-top: 20px;
  padding: 0;
  font-size: 13px;
  line-height: 26px;
  font-weight: 700;
  color: #333;
`;

const RelatedProductsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: center;
  gap: 20px;
  margin-top: 50px;
  margin-bottom: 30px;
`;

const PurchaseWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin: 20px 0;
  width: 100%;
  height: 50px;
`;

export default function ProductDetail() {
  const location = useLocation();
  const productId = new URLSearchParams(location.search).get("productId");
  const navigate = useNavigate();

  const { getProductDetail, getProducts } = useCommerce();
  const [product, setProduct] = useState<ProductModel | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<ProductModel[]>([]);

  const handleCardClick = (id: number) => {
    scrollTop();
    navigate(`/product-detail?productId=${id}`);
  };

  useEffect(() => {
    if (!productId) {
      return;
    }

    getProductDetail(Number(productId)).then((res) => setProduct(res));
    getProducts({ page: 1, size: 4 }).then((res) =>
      setRelatedProducts(res.items)
    );
  }, [productId]);

  return (
    <ProductDetailWrap>
      <ProductInfoWrap>
        {/* <Carousel
          indicators={false}
          autoPlay={true}
          animation="fade"
          interval={3000}
          height={460}
        >
          {items.map((item) => (
            <Paper sx={{ boxShadow: "none" }} key={item.slogan}>
              <MainBannerImage src={mainBannerImage}></MainBannerImage>
              <SloganWrap>
                <Slogan className="bodoni-moda">{item.slogan}</Slogan>
              </SloganWrap>
            </Paper>
          ))}
        </Carousel> */}

        <ImageWrap>
          <img src={tempDetailImage}></img>
        </ImageWrap>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <NameText>{product?.name}</NameText>
          <PriceText>{formatKrw(Number(product?.price))}</PriceText>
          <PurchaseWrap>
            <FullWidthButton
              label="ADD TO CART"
              onClick={() => {}}
            ></FullWidthButton>
            <FullWidthButton label="BUY" onClick={() => {}}></FullWidthButton>
          </PurchaseWrap>
          <DescriptionText>{product?.description}</DescriptionText>
        </div>
      </ProductInfoWrap>

      <RelatedProductsWrap>
        <PrimaryTitle title="You may also like" size={18}></PrimaryTitle>
        <ProductCardList
          items={relatedProducts}
          onCardClick={handleCardClick}
        ></ProductCardList>
      </RelatedProductsWrap>
    </ProductDetailWrap>
  );
}
