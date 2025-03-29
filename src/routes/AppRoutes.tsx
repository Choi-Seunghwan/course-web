import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import My from "../pages/My";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/product-detail" element={<ProductDetail />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="/my" element={<My />}></Route>
    </Routes>
  );
};

export default AppRoutes;
