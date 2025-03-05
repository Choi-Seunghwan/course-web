import React from "react";
import styled from "styled-components";
import MainBanner from "../components/banner/MainBanner";

const Container = styled.div`
  display: relative;
`;

export default function Main() {
  return (
    <Container>
      <MainBanner />
    </Container>
  );
}
