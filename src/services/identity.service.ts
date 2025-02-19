import PortOne from "@portone/browser-sdk/v2";
import { nanoid } from "nanoid";

export const portoneIdentityVerification = async () => {
  console.log("본인인증을 시작합니다.");

  const result = await PortOne.requestIdentityVerification({
    storeId: `${process.env.REACT_APP_PORTONE_STORE_ID}`,
    identityVerificationId: `identity-verification-${nanoid()}`,
    channelKey: `${process.env.REACT_APP_PORTONE_CHANNEL_KEY}`,
  });

  console.log("본인인증 결과:", result);
  return result;
};
