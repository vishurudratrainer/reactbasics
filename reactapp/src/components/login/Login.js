import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import RestInstance from "../rest/instance/RestInstance";
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
    RestInstance.post("/login",
   // axios
     // .post(
      //  "https://reqres.in/api/login",
        { email: formData.username, password: formData.password },
       /**  {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-api-key": "reqres-free-v1",
          },
        }**/
      )
      .then((res) => {
        if (res.data.token) {
          props.setIsAuthenticated(true);
          navigate("/calculator");
        }
      })
      .catch((error) =>
        setError(
          "Login is not successfull. Please check ur username and password"
        )
      );
  };

  const checkField = (data) => {
    let length = data.trim().length;
    console.log(length);
    return length > 0;
  };

  const capture = (e) => {
    let propertyName = e.target.name;
    let propertyValue = e.target.value;
    let touch = true;
    if (propertyName === "username") {
      touch = touch && propertyValue.trim().length > 0;
      touch = touch && checkField(formData.password);
    } else {
      touch = touch && propertyValue.trim().length > 0;
      touch = touch && checkField(formData.username);
    }

    setFormData({
      ...formData,
      [propertyName]: propertyValue,
      touch: touch,
    });
  };

  return (
    <div>
      <form onSubmit={doLogin}>
        <label>
          Enter username{" "}
          <input name="username" onChange={capture} minLength={2} />
        </label>
        <br />
        <label>
          Enter password{" "}
          <input
            type="password"
            name="password"
            onChange={capture}
            minLength={2}
          />
        </label>
        <br />
        <button disabled={!formData.touch}>Login</button>
      </form>
      {error ? <h1 style={{ color: "red" }}>{error}</h1> : <></>}
    </div>
  );
};

export default Login;
