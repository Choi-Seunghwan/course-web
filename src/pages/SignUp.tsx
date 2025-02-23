import React from "react";
import styled from "styled-components";
import { Button, Step, StepLabel, Stepper } from "@mui/material";
import { useAuth } from "../hooks/useAuth";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const StepWrap = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100px;
  margin-top: 40px;
`;

const SignUpWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Step1Div = styled.div``;

const Step2Div = styled.div``;

const Step3Div = styled.div``;

export default function SignUp() {
  /** stepper */
  const steps = ["본인인증", "정보입력", "완료"];
  const [step, setStep] = React.useState(0);
  const { identityVerification, signUp: authSignUp } = useAuth();

  const handleVerification = async () => {
    await identityVerification();
    setStep(1);
  };

  const handleSignUp = async () => {
    await authSignUp();
    setStep(2);
  };

  return (
    <Container>
      <StepWrap>
        <Stepper style={{ width: "100%" }} activeStep={step} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </StepWrap>

      <SignUpWrap>
        <Step1Div>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              handleVerification();
            }}
          >
            본인인증 하기
          </Button>
        </Step1Div>
        <Step2Div>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              handleSignUp();
            }}
          >
            완료
          </Button>
        </Step2Div>
      </SignUpWrap>
    </Container>
  );
}
