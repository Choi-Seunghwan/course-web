import styled from "styled-components";
import mainBannerImage from "../../assets/main.webp";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

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
        height={600}
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
    </MainBannerWrap>
  );
}
