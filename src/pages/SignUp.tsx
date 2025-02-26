import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Button, Step, StepLabel, Stepper, TextField } from "@mui/material";
import { useAuth } from "../hooks/useAuth";

export type SignUpData = {
  loginId: string;
  email: string;
  password: string;
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const SignUpWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 16px;
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 400px;
`;

export default function SignUp() {
  const steps = ["본인인증", "정보입력", "완료"];
  const [step, setStep] = React.useState(0);
  const { identityVerification, signUp: authSignUp } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>();

  const handleVerification = async () => {
    await identityVerification();
    setStep(1);
  };

  const handleSignUp = async (data: SignUpData) => {
    console.log("회원가입 데이터:", data);
    await authSignUp(data);
    setStep(2);
  };

  const renderStepContent = () => {
    switch (step) {
      case 0:
        return (
          <Button
            variant="contained"
            color="primary"
            onClick={handleVerification}
          >
            본인인증 하기
          </Button>
        );
      case 1:
        return (
          <SignUpForm onSubmit={handleSubmit(handleSignUp)}>
            <TextField
              label="아이디"
              variant="outlined"
              fullWidth
              {...register("loginId", { required: "아이디를 입력하세요." })}
              error={!!errors.loginId}
              helperText={errors.loginId?.message}
            />
            <TextField
              label="이메일"
              variant="outlined"
              fullWidth
              {...register("email")}
            />
            <TextField
              label="비밀번호"
              type="password"
              variant="outlined"
              fullWidth
              {...register("password", { required: "비밀번호를 입력하세요." })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <Button type="submit" variant="contained" color="primary">
              완료
            </Button>
          </SignUpForm>
        );
      case 2:
        return <p>회원가입이 완료되었습니다!</p>;
      default:
        return <p>잘못된 접근입니다.</p>;
    }
  };

  return (
    <Container>
      <Stepper style={{ width: "100%" }} activeStep={step} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <SignUpWrap>{renderStepContent()}</SignUpWrap>
    </Container>
  );
}
