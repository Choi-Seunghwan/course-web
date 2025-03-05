import styled from "styled-components";
import mainBannerImage from "../../assets/main.webp";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import PrimaryTitle from "../title/PrimaryTitle";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";

const MainBannerWrap = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
`;

const MainBannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SloganWrap = styled.div`
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
`;

const Slogan = styled.p`
  font-size: 46px;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const NewArrivalWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 28px;
`;

export default function MainBanner() {
  const items = [
    {
      image: mainBannerImage,
      slogan: "LUXURY",
    },
    {
      image: mainBannerImage,
      slogan: "FASHION",
    },
    {
      image: mainBannerImage,
      slogan: "ACCESSORIES",
    },
  ];

  return (
    <MainBannerWrap>
      <Carousel
        indicators={false}
        autoPlay={true}
        animation="fade"
        interval={3000}
      >
        {items.map((item) => (
          <Paper sx={{ boxShadow: "none" }} key={item.slogan}>
            <MainBannerImage src={mainBannerImage}></MainBannerImage>
            <SloganWrap>
              <Slogan className="bodoni-moda">{item.slogan}</Slogan>
            </SloganWrap>
          </Paper>
        ))}
      </Carousel>
      <NewArrivalWrap>
        <PrimaryTitle str="NEW ARRIVAL" />
        <Breadcrumbs
          items={[
            { name: "ALL", path: "/" },
            { name: "Apparel", path: "/" },
            { name: "Dress", path: "/" },
            { name: "Tshirt", path: "/" },
            { name: "Bag", path: "/" },
          ]}
        ></Breadcrumbs>
      </NewArrivalWrap>
    </MainBannerWrap>
  );
}
