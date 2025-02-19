import styled from "styled-components";

const AppContentWrap = styled.div`
  position: relative;
  height: calc(100% - 60px);
`;

export default function AppContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppContentWrap>{children}</AppContentWrap>;
}
