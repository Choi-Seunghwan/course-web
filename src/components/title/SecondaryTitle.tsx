import styled from "styled-components";

const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 8px;
  color: #333;
`;

export default function SecondaryTitle(props: {
  title: string;
  size?: number;
  style?: React.CSSProperties;
}) {
  return (
    <Title style={{ fontSize: props.size || 20, ...props.style }}>
      {props.title}
    </Title>
  );
}
