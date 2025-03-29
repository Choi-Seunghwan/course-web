import styled from "styled-components";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import cartIcon from "../../assets/icon/cart.png";
import profileIcon from "../../assets/icon/profile.png";
import { useCartContext } from "../../context/CartContext";

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

const Icon = styled.img`
  cursor: pointer;
`;

const CartCount = styled.span`
  position: absolute;
  right: -5px;
  bottom: 0px;
  background-color: #d9534f;
  color: #fff;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  opacity: 0.9;
  pointer-events: none;
`;

const CartIconWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
`;

export default function AppHeader() {
  const { isAuthenticated } = useAuthContext();
  const { cart } = useCartContext();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  const renderAuth = () => {
    if (isAuthenticated) {
      return (
        <Icon style={{}} src={profileIcon} onClick={() => navigate("/my")} />
      );
    } else {
      return <AuthText onClick={() => navigate("/sign-in")}>LOGIN</AuthText>;
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "120px",
          justifyContent: "right",
        }}
      >
        <CartIconWrap>
          <Icon
            style={{ marginLeft: "20px" }}
            src={cartIcon}
            onClick={handleCartClick}
          />
          {cart.length > 0 && <CartCount>{cart.length}</CartCount>}
        </CartIconWrap>
      </div>
    </AppHeaderContainer>
  );
}
