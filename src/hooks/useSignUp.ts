import { useState } from "react";
import { postSignUp } from "../services/account.service";
import { portoneIdentityVerification } from "../services/identity.service";

export const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignUp = async (signUpData: any) => {
    setLoading(true);
    setError(null);

    try {
      const verificationResult = await portoneIdentityVerification();

      // if (!verificationResult?.verified) {
      //   throw new Error("본인인증 실패");
      // }

      const response = await postSignUp({
        ...signUpData,
        verification: verificationResult,
      });
      console.log("회원가입 성공:", response.data);
      return response.data;
    } catch (err: any) {
      console.error("회원가입 에러:", err);
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { handleSignUp, loading, error };
};
