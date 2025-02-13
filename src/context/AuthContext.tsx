import React, { createContext, useContext, useReducer, ReactNode } from "react";

type Account = {
  id: number;
  email: string;
  name: string;
};

const initialState = {
  isAuthenticated: false,
  account: null,
};

function authReducer(state: any, action: any) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isAuthenticated: true, account: action.payload };
    case "LOGOUT":
      return { ...state, isAuthenticated: false, account: null };
    default:
      return state;
  }
}

type AuthContextType = {
  isAuthenticated: boolean;
  account: Account | null;
  login: (account: Account) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (account: Account) =>
    dispatch({ type: "LOGIN", payload: account });
  const logout = () => dispatch({ type: "LOGOUT" });

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
