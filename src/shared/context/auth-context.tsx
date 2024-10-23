import { FC, createContext, useCallback, useMemo, useState } from "react";

type Props = {
  children: any;
};
interface IAuthContext {
  token: string | null;
  refreshToken: string | null;
  login: (tokens: any) => void;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContext>({
  token: "",
  refreshToken: "",
  login: () => {
    // intentionally empty
  },
  logout: () => {
    // intentionally empty
  },
});

const AuthContextProvider: FC<Props> = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("accessToken"));
  const [refreshToken, setRefreshToken] = useState(
    localStorage.getItem("refreshToken")
  );

  const login = useCallback((tokens: any) => {
    localStorage.setItem("accessToken", tokens.accessToken);
    localStorage.setItem("refreshToken", tokens.refreshToken);
    setToken(tokens.accessToken);
    setRefreshToken(tokens.refreshToken);
  }, []);

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setToken(null);
    setRefreshToken(null);
  };

  const memoedValue = useMemo(
    () => ({
      token,
      refreshToken,
      login,
      logout,
    }),
    [token, refreshToken, login, logout]
  );

  return (
    <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
  );
};
export default AuthContextProvider;
