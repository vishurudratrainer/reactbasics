import { Link } from "react-router-dom";
const GoLogin = (props) => {
  return (
    <div>

        <h1>
          For the requested action please Login <Link to={"/"}>Login</Link>
        </h1>

    </div>
  );
};

export default GoLogin;
