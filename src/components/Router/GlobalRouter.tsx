import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";
import { FC, useContext } from "react";

const GlobalRoute: FC = () => {
  const { token } = useContext(AuthContext);
  return token ? <Navigate to="/" replace /> : <Outlet />;
};
export default GlobalRoute;
