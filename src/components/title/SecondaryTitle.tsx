import styled from "styled-components";

const TitleWrap = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 8px;
  color: #333;
`;

export default function SecondaryTitle(props: {
  title: string;
  size?: number;
}) {
  return (
    <TitleWrap>
      <Title style={{ fontSize: props.size || 20 }}>{props.title}</Title>
    </TitleWrap>
  );
}
