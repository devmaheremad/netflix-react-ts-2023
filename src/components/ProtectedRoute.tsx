import { ProtectedRouteType } from "../types/ProtectedRoute.types";
import { UserAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: ProtectedRouteType) => {
  const { user } = UserAuth();
  if (!user) {
    return <Navigate to={"/"} />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
