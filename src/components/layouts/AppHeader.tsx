import styled from "styled-components";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import cartIcon from "../../assets/icon/cart.png";

const AppHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
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

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const AuthText = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #555;
  margin: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
`;

const CartIcon = styled.img`
  cursor: pointer;
`;

export default function AppHeader() {
  const { isAuthenticated, account } = useAuthContext();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  const renderAuth = () => {
    if (isAuthenticated) {
      return <AuthText onClick={logout}>LOGOUT</AuthText>;
    } else {
      return <AuthText onClick={() => navigate("/signin")}>LOGIN</AuthText>;
    }
  };

  return (
    <AppHeaderContainer>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "120px",
        }}
      >
        {renderAuth()}
      </div>
      <LogoWrap>
        <Logo onClick={handleLogoClick} className="oswald">
          Luxury
          <br />
          Fashion
        </Logo>
      </LogoWrap>
      <div style={{ display: "flex", alignItems: "center", width: "120px" }}>
        <AuthText style={{ marginRight: "10px" }}>{account?.loginId}</AuthText>
        <CartIcon
          style={{ marginLeft: "auto" }}
          src={cartIcon}
          onClick={handleCartClick}
        />
      </div>
    </AppHeaderContainer>
  );
}
