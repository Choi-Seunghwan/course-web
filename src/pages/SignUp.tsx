import React from "react";
import styled from "styled-components";
import { Button, Step, StepLabel, Stepper } from "@mui/material";

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

export default function SignUp() {
  /** stepper */
  const steps = ["본인인증", "정보입력", "완료"];
  const [step, setStep] = React.useState(0);

  const handleVerification = () => {};

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
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            handleVerification();
          }}
        >
          본인인증 하기
        </Button>
      </SignUpWrap>
    </Container>
  );
}
