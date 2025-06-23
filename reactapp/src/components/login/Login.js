import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    touch: false,
  });
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const doLogin = (e) => {
    e.preventDefault();
    if (formData.username !== "" && formData.username === formData.password) {
      props.setIsAuthenticated(true);
      navigate("/calculator");
    } else {
      setError(
        "Login is not successfull. Please check ur username and password"
      );
    }
  };

  const capture = (e) => {
    let propertyName = e.target.name;
    let propertyValue = e.target.value;
    setFormData({
      ...formData,
      [propertyName]: propertyValue,
      touch: formData.username.length > 0 && formData.password.length > 0,
    });
  };

  return (
    <div>
      <form onSubmit={doLogin}>
        <label>
          Enter username <input name="username" onChange={capture} />
        </label>
        <br />
        <label>
          Enter password{" "}
          <input type="password" name="password" onChange={capture} />
        </label>
        <br />
        <button disabled={!formData.touch}>Login</button>
      </form>
      {error ? <h1 style={{ color: "red" }}>{error}</h1> : <></>}
    </div>
  );
};

export default Login;
