import styled from "styled-components";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const AppHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  height: 60px;
`;

const Logo = styled.h1`
  font-size: 25px;
  font-weight: 700;
  color: #333;
  margin: 0;
  cursor: pointer;
`;

const AuthButton = styled.button`
  padding: 8px 16px;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #2563eb;
  }
`;

export default function AppHeader() {
  const { isAuthenticated, account } = useAuthContext();
  const { logout } = useAuth();

  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleSignInButton = () => {
    navigate("/signIn");
  };

  return (
    <AppHeaderContainer>
      <Logo onClick={handleLogoClick}>MyShop</Logo>
      {isAuthenticated ? (
        <div>
          <span>👤 {account?.loginId}</span>
          <AuthButton onClick={logout} style={{ marginLeft: "10px" }}>
            로그아웃
          </AuthButton>
        </div>
      ) : (
        <AuthButton onClick={handleSignInButton}>로그인 / 회원가입</AuthButton>
      )}
    </AppHeaderContainer>
  );
}
