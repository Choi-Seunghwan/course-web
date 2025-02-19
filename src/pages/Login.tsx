import React from "react";
import styled from "styled-components";
import { Button, Input } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
`;

const SignInWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 20px;
`;

export default function Login() {
  const navigate = useNavigate();

  const handleSignUpButton = () => {
    console.log("회원가입 버튼 클릭");
    navigate("/sign-up");
  };

  return (
    <Container>
      <SignInWrap>
        <Input placeholder="아이디" />
        <Input placeholder="비밀번호" />
        <Button variant="text">로그인</Button>
        <Button onClick={handleSignUpButton} variant="text">
          회원가입
        </Button>
      </SignInWrap>
    </Container>
  );
}
