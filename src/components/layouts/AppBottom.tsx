import styled from "styled-components";

const AppBottomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 340px;
`;

export default function AppBottom() {
  return <AppBottomContainer></AppBottomContainer>;
}
