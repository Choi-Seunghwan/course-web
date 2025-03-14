import React from "react";
import styled from "styled-components";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SidebarContainer = styled.div<{ isOpen: boolean }>`
  position: absolute; /* ✅ 부모인 MobileMode 내부에서 동작하도록 변경 */
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")}; /* 사이드바 토글 */
  width: 100%; /* ✅ 모바일 너비에 맞게 100% */
  height: 100%;
  background-color: #222;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  transition: left 0.2s ease-in-out;
`;

const MenuItem = styled.div`
  padding: 15px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
`;

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <CloseButton onClick={onClose}>✖</CloseButton>
      <MenuItem>Home</MenuItem>
      <MenuItem>Shop</MenuItem>
      <MenuItem>About</MenuItem>
      <MenuItem>Contact</MenuItem>
    </SidebarContainer>
  );
};

export default Sidebar;
