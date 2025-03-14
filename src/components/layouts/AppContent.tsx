import styled from "styled-components";

const AppContentWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background-color: #fff;
  min-height: calc(100vh - 185px);
`;

export default function AppContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppContentWrap>{children}</AppContentWrap>;
}
