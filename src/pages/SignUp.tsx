import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Button, Input, Step, StepLabel, Stepper } from "@mui/material";
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
  height: calc(100vh - 185px);
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

// ✅ Stepper의 active 색상을 검정으로 변경
const CustomStepper = styled(Stepper)({
  margin: "30px auto auto auto",
  "& .MuiStepIcon-root": {
    color: "#ddd",
  },
  "& .MuiStepIcon-root.Mui-active": {
    color: "#000",
  },
  "& .MuiStepIcon-root.Mui-completed": {
    color: "#000",
  },
});

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
    await authSignUp(data);

    setStep(2);
  };

  const renderStepContent = () => {
    switch (step) {
      case 0:
        return (
          <Button
            variant="contained"
            onClick={handleVerification}
            style={{ backgroundColor: "#000" }}
          >
            본인인증 하기
          </Button>
        );
      case 1:
        return (
          <SignUpForm
            onSubmit={handleSubmit(handleSignUp)}
            style={{
              width: "80%",
            }}
          >
            <Input
              placeholder="아이디"
              {...register("loginId", { required: "아이디를 입력하세요." })}
              error={!!errors.loginId}
              style={{ color: "#000" }}
            />
            <Input
              placeholder="이메일"
              {...register("email")}
              style={{ color: "#000" }}
            />
            <Input
              placeholder="비밀번호"
              type="password"
              {...register("password", { required: "비밀번호를 입력하세요." })}
              error={!!errors.password}
              style={{ color: "#000" }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ backgroundColor: "#000" }}
            >
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
      <CustomStepper
        style={{ width: "100%" }}
        activeStep={step}
        alternativeLabel
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </CustomStepper>

      <SignUpWrap>{renderStepContent()}</SignUpWrap>
    </Container>
  );
}
