import React from "react";
import styled from "styled-components";

const FullWidthButtonWrap = styled.button`
  width: 100%;
  padding: 16px 0;
  background-color: black;
  color: white;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

interface FullWidthButtonProps {
  label: string;
  onClick: () => void;
}

const FullWidthButton: React.FC<FullWidthButtonProps> = ({
  label,
  onClick,
}) => {
  return <FullWidthButtonWrap onClick={onClick}>{label}</FullWidthButtonWrap>;
};

export default FullWidthButton;
