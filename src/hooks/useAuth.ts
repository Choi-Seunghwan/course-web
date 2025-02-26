import { useState } from "react";

import {
  postSignUp,
  // postLogin,
  // postLogout,
  portoneIdentityVerification,
} from "../services/auth.service";
import { useAuthContext } from "../context/AuthContext";
import { IdentityVerificationResponse } from "@portone/browser-sdk/v2";
import { SignUpData } from "../types/auth.type";

export const useAuth = () => {
  const { isAuthenticated, account, login, logout } = useAuthContext();
  const [verificationData, setVerificationData] =
    useState<IdentityVerificationResponse | null>(null);

  const identityVerification = async () => {
    try {
      const result = await portoneIdentityVerification();

      setVerificationData(result);

      return result;
    } catch (err: any) {
      throw err;
    }
  };

  const signUp = async (signUpData: SignUpData) => {
    if (!verificationData) {
      throw new Error("본인인증을 먼저 수행하세요.");
    }

    try {
      const response = await postSignUp({
        ...signUpData,
        identityVerificationId: verificationData.identityVerificationId,
      });

      // login(response.data.account);
      return response.data;
    } catch (err: any) {
      throw err;
    }
  };

  // const handleLogin = async (loginData: any) => {
  //   setLoading(true);
  //   setError(null);

  //   try {
  //     const response = await postLogin(loginData);
  //     login(response.data.account); //  Context 업데이트
  //     return response.data;
  //   } catch (err: any) {
  //     setError(err.message);
  //     throw err;
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const handleLogout = async () => {
  //   setLoading(true);
  //   setError(null);

  //   try {
  //     await postLogout();
  //     logout(); //  Context 업데이트
  //   } catch (err: any) {
  //     setError(err.message);
  //     throw err;
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return {
    isAuthenticated,
    account,
    verificationData,
    identityVerification,
    signUp,
    // handleLogin,
    // handleLogout,
  };
};
