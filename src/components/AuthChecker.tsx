import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthChecker = ({ element }: any) => {
  const token = useSelector((state: any) => state.auth.loggedInToken);
  if (token) {
    return element;
  }

  return <Navigate to={"/login"} replace />;
};

export default AuthChecker;
