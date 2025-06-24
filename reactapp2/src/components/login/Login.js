import { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const capture = (e) => {
    let propertyName = e.target.name;
    let propertyValue = e.target.value;
    setFormData({ ...formData, [propertyName]: propertyValue });
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/login", formData, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "reqres-free-v1",
        },
      })
      .then((res) => {
        if (res.data.token) {
            navigate("/welcome")
        }
      });
  };
  return (
    <div>
      <form onSubmit={login}>
        <TextField
          required
          id="outlined-required"
          name="email"
          label="Enter email"
          onChange={capture}
        />
        <br />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          name="password"
          onChange={capture}
          autoComplete="current-password"
        />
        <br />
        <Button variant="contained" type="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login