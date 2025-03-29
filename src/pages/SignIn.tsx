import React, { useState } from "react";
import styled from "styled-components";
import { Button, Input } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import strings from "../strings/string";

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

  const handleSignInButton = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    try {
      await signIn({ loginId, password });
      navigate("/");
    } catch (error) {
      alert(strings["ko"].LOGIN_FAIL);
    }
  };

  const handleSignUpButton = () => {
    navigate("/sign-up");
  };

  return (
    <Container>
      <SignInWrap>
        <form
          onSubmit={handleSignInButton}
          style={{ textAlign: "center", width: "100%" }}
        >
          <Input
            placeholder="아이디"
            value={loginId}
            onChange={(e) => setLoginId(e.target.value)}
            style={{ color: "#000", width: "90%", marginBottom: "10px" }}
          />
          <Input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ color: "#000", width: "90%", marginBottom: "10px" }}
          />
          <Button
            type="submit"
            variant="text"
            style={{ color: "#000", width: "90%", marginBottom: "10px" }}
          >
            로그인
          </Button>
        </form>

        <Button
          onClick={handleSignUpButton}
          variant="text"
          style={{ color: "#000", width: "90%" }}
        >
          회원가입
        </Button>
      </SignInWrap>
    </Container>
  );
}
