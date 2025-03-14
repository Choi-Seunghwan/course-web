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

const LoginText = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #555;
  margin: 0;
  text-decoration: underline;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
`;

const CartIcon = styled.img`
  cursor: pointer;
`;

export default function AppHeader() {
  const { isAuthenticated } = useAuthContext();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <AppHeaderContainer>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "80px",
          textOverflow: "ellipsis  ",
        }}
      >
        <LoginText
          onClick={isAuthenticated ? logout : () => navigate("/signin")}
        >
          LOGIN
        </LoginText>
      </div>
      <LogoWrap>
        <Logo onClick={handleLogoClick} className="oswald">
          Luxury
          <br />
          Fashion
        </Logo>
      </LogoWrap>
      <div style={{ display: "flex", alignItems: "center", width: "80px" }}>
        <CartIcon style={{ marginLeft: "auto" }} src={cartIcon} />
      </div>
    </AppHeaderContainer>
  );
}
