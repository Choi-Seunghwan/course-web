import styled from "styled-components";

const AppHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  height: 60px;
  max-height: 60px;
`;

const Logo = styled.h1`
  font-size: 25px;
  font-weight: 700;
  color: #333;
  margin: 0;
`;

export default function AppHeader() {
  return (
    <AppHeaderContainer>
      <Logo>App Header</Logo>
    </AppHeaderContainer>
  );
}
