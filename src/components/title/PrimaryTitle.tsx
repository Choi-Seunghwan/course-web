import { Divider } from "@mui/material";
import styled from "styled-components";

const TitleWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #333;
`;

export default function PrimaryTitle(props: { title: string; size?: number }) {
  return (
    <TitleWrap>
      <Title style={{ fontSize: props.size || 24 }}>{props.title}</Title>
      <Divider style={{ width: "40%", margin: "-10px 0 0 0" }} />
    </TitleWrap>
  );
}
