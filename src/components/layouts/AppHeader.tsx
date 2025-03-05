import styled from "styled-components";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const AppHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 60px;
  padding: 10px;
  background-color: #fff;
`;

const Logo = styled.h1`
  font-size: 26px;
  font-weight: 700;
  color: #333;
  margin: 0;
  cursor: pointer;
  line-height: 23px;
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

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

  const authenticatedPart = () => {
    return (
      <div>
        <AuthButton onClick={logout} style={{ marginLeft: "10px" }}>
          로그아웃
        </AuthButton>
      </div>
    );
  };

  return (
    <AppHeaderContainer>
      {isAuthenticated ? (
        <div>
          {/* <AuthButton onClick={logout} style={{ marginLeft: "10px" }}>
            로그아웃
          </AuthButton> */}
        </div>
      ) : (
        <div></div>
        // <AuthButton onClick={handleSignInButton}>로그인 / 회원가입</AuthButton>
      )}
      <LogoWrap>
        <Logo onClick={handleLogoClick} className="oswald">
          Luxury
          <br />
          Fashion
        </Logo>
      </LogoWrap>
    </AppHeaderContainer>
  );
}
