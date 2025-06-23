import { Link } from "react-router-dom";
import NoPage from "../NoPage";
const GoLogin = (props) => {
  return (
    <div>
      {props.isAuthenticated && <NoPage />}
      {!props.isAuthenticated && (
        <h1>
          For the requested action please Login <Link to={"/"}>Login</Link>
        </h1>
      )}
    </div>
  );
};

export default GoLogin;
