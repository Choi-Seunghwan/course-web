import styled from "styled-components";

const AppContentWrap = styled.div`
  position: relative;
  background-color: #fff;
`;

export default function AppContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppContentWrap>{children}</AppContentWrap>;
}
