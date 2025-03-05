import styled from "styled-components";
import MainBanner from "../components/banner/MainBanner";
import PrimaryTitle from "../components/title/PrimaryTitle";
import CategoryTabs from "../components/tab/CategoryTabs";

const NewArrivalWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 28px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export default function Main() {
  return (
    <Container>
      <MainBanner />
      <NewArrivalWrap>
        <PrimaryTitle str="NEW ARRIVAL" />
        <CategoryTabs />
      </NewArrivalWrap>
    </Container>
  );
}
