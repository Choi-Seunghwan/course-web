import axios from "axios";
import PortOne, { IdentityVerificationResponse } from "@portone/browser-sdk/v2";
import { nanoid } from "nanoid";
import {
  AccountModel,
  SignInData,
  SignInResponse,
  SignUpDto,
} from "../types/auth.type";

export const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const postSignUp = async (data: SignUpDto) => {
  return await apiInstance
    .post("/account/sign-up", data)
    .then((res) => res.data);
};

export const postSignIn = async (data: SignInData): Promise<SignInResponse> => {
  return await apiInstance
    .post("/account/sign-in", data)
    .then((res) => res.data);
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
    console.log("본인인증을 시작합니다.");

    const result = await PortOne.requestIdentityVerification({
      storeId: `${process.env.REACT_APP_PORTONE_STORE_ID}`,
      identityVerificationId: `identity-verification-${nanoid()}`,
      channelKey: `${process.env.REACT_APP_PORTONE_CHANNEL_KEY}`,
    });

    console.log("본인인증 결과:", result);

    if (!result) {
      throw new Error("본인인증 에러");
    }

    if (result.code) {
      throw new Error("본인인증 실패");
    }

    return result;
  };
