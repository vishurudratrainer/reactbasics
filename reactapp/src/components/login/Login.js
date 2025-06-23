import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const doLogin = () => {
    if (formData.username !== "" && formData.username === formData.password) {
      props.setIsAuthenticated(true);
      navigate("/calculator");
    }
  };

  const capture =e =>{
    let propertyName=e.target.name
    let propertyValue=e.target.value
    setFormData({...formData,[propertyName]:propertyValue})

  }

  return (
    <div>
      <label>
        Enter username <input name="username" onChange={capture} />
      </label>
      <br />
      <label>
        Enter password <input type="password" name="password" onChange={capture}/>
      </label>
      <br/>
      <button onClick={doLogin}>Login</button>
    </div>
  );
};

export default Login;
