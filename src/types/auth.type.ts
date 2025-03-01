export type SignUpData = {
  loginId: string;
  email: string;
  password: string;
};

export type SignUpDto = {
  loginId: string;
  email: string;
  password: string;
  identityVerificationId: string;
};

export type SignInData = {
  loginId: string;
  password: string;
};

export type SignInResponse = {
  accessToken: string;
  account: AccountModel;
};

export type AccountModel = {
  accountId: string;
  loginId: string;
  email: string;
  status: string;
};
