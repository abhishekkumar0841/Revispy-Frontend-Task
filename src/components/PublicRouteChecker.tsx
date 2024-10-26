import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PublicRouteChecker = ({ element }: any) => {
  const token = useSelector((state:any) => state.auth.loggedInToken);
  if (!token) {
    return element;
  }
  return <Navigate to={"/"} replace />;
};

export default PublicRouteChecker;
