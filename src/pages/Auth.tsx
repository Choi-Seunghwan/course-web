import React from "react";
import styled from "styled-components";
import { portoneIdentityVerification } from "../utils/portoneVerification";

const Container = styled.div`
  display: relative;
`;

const VerificationButton = styled.button`
  width: 200px;
  height: 50px;
`;

export default function Auth() {
  const handleVerification = () => {
    portoneIdentityVerification();
  };

  return (
    <Container>
      <div></div>
      <VerificationButton
        onClick={() => {
          handleVerification();
        }}
      >
        본인인증
      </VerificationButton>
    </Container>
  );
}
