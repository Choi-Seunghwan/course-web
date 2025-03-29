import { useState } from "react";

import {
  portoneIdentityVerification,
  signIn as signInApi,
  signUp as signUpApi,
  signOut as signOutApi,
} from "../services/account.service";
import { useAuthContext } from "../context/AuthContext";
import { IdentityVerificationResponse } from "@portone/browser-sdk/v2";
import { SignInData, SignUpData } from "../types/auth.type";

export const useAuth = () => {
  const {
    isAuthenticated,
    account,
    setAccessToken,
    setAccount,
    signOut: authContextSignOut,
  } = useAuthContext();
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
      const response = await signUpApi({
        ...signUpData,
        identityVerificationId: verificationData.identityVerificationId,
      });

      return response.data;
    } catch (err: any) {
      throw err;
    }
  };

  const signIn = async (signInData: SignInData) => {
    try {
      const resData = await signInApi(signInData);
      setAccessToken(resData.accessToken);
      setAccount(resData.account);
    } catch (err: any) {
      throw err;
    }
  };

  const signOut = async () => {
    await signOutApi();
    authContextSignOut();
  };

  return {
    isAuthenticated,
    account,
    verificationData,
    identityVerification,
    signUp,
    signIn,
    signOut,
  };
};
