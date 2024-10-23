import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";
import { FC, useContext } from "react";

const PrivateRoute: FC = () => {
  const { token } = useContext(AuthContext);
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};
export default PrivateRoute;
