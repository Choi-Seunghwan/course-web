import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useEffect,
} from "react";
import { AccountModel } from "../types/auth.type";
import { getMe } from "../services/account.service";

const initialState = {
  isAuthenticated: false,
  account: null,
  accessToken: null,
};

function authReducer(state: any, action: any) {
  switch (action.type) {
    case "SET_ACCESS_TOKEN":
      return { ...state, accessToken: action.payload };
    case "SET_ACCOUNT":
      return { ...state, isAuthenticated: true, account: action.payload };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        account: null,
        accessToken: null,
      };
    default:
      return state;
  }
}

type AuthContextType = {
  isAuthenticated: boolean;
  setAccessToken: (accessToken: string) => void;
  accessToken: string | null;
  account: AccountModel | null;
  setAccount: (account: AccountModel) => void;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const setAccount = (account: AccountModel) =>
    dispatch({ type: "SET_ACCOUNT", payload: account });
  const setAccessToken = (accessToken: string) =>
    dispatch({ type: "SET_ACCESS_TOKEN", payload: accessToken });
  const signOut = () => {
    localStorage.removeItem("accessToken");
    dispatch({ type: "SIGN_OUT" });
  };

  /** Load User */
  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        dispatch({ type: "SET_ACCESS_TOKEN", payload: token });
        try {
          const account = await getMe();

          dispatch({ type: "SET_ACCOUNT", payload: account });
        } catch (err) {
          signOut();
        }
      }
    };

    initAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{ ...state, setAccount, signOut, setAccessToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
