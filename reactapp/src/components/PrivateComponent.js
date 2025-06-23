import { Outlet, Navigate } from "react-router-dom";

//above is known as props extracting...Extracting values from props
export default function PrivateComponent({ isAuthenticated }) {
  if (isAuthenticated) {
    return <Outlet />;
  } else {
    return <Navigate to={"/"} />;
  }
}
