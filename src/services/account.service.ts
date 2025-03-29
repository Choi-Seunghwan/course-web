import axios from "axios";
import PortOne, { IdentityVerificationResponse } from "@portone/browser-sdk/v2";
import { nanoid } from "nanoid";
import {
  AccountModel,
  checkDuplicateVerificationDto,
  SignInData,
  SignInResponse,
  SignUpDto,
} from "../types/auth.type";
import { setUpInterceptors } from "./api.interceptor";

export const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_ACCOUNT_SERVICE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

setUpInterceptors(apiInstance);

export const signUp = async (data: SignUpDto) => {
  return await apiInstance
    .post("/account/sign-up", data)
    .then((res) => res.data);
};

export const checkDuplicateVerification = async (
  data: checkDuplicateVerificationDto
): Promise<boolean> => {
  return await apiInstance
    .post("/account/check-duplicate-ci", data)
    .then((res) => res.data);
};

export const signIn = async (data: SignInData): Promise<SignInResponse> => {
  return await apiInstance
    .post("/account/sign-in", data)
    .then((res) => res.data);
};

export const signOut = async () => {
  return await apiInstance.post("/account/sign-out").then((res) => res.data);
};

export const getMe = async (): Promise<AccountModel> => {
  return await apiInstance
    .get("/account/me", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
    .then((res) => res.data);
};

export const portoneIdentityVerification =
  async (): Promise<IdentityVerificationResponse> => {
    const result = await PortOne.requestIdentityVerification({
      storeId: `${process.env.REACT_APP_PORTONE_STORE_ID}`,
      identityVerificationId: `identity-verification-${nanoid()}`,
      channelKey: `${process.env.REACT_APP_PORTONE_INICIS_CHANNEL_KEY}`,
    });

    if (!result) {
      throw new Error("본인인증 에러");
    }

    if (result.code) {
      throw new Error("본인인증 실패");
    }

    return result;
  };
