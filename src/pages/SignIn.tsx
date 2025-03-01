import React, { useState } from "react";
import styled from "styled-components";
import { Button, Input } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

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

export default function SignIn() {
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");

  const handleSignInButton = async () => {
    try {
      await signIn({ loginId, password });
      navigate("/");
    } catch (error) {
      console.error("로그인 실패:", error);
      alert("로그인에 실패했습니다. 아이디와 비밀번호를 확인하세요.");
    }
  };

  const handleSignUpButton = () => {
    navigate("/sign-up");
  };

  return (
    <Container>
      <SignInWrap>
        <Input
          placeholder="아이디"
          value={loginId}
          onChange={(e) => setLoginId(e.target.value)}
        />
        <Input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleSignInButton} variant="text">
          로그인
        </Button>
        <Button onClick={handleSignUpButton} variant="text">
          회원가입
        </Button>
      </SignInWrap>
    </Container>
  );
}
