import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const loginData = useSelector(state=>state.login)
  const capture =e=>{

      let propertyName = e.target.name;
    let propertyValue = e.target.value;
    dispatch({
      type: "CAPTURE_CREDIENTIALS",
      formData: { [propertyName]: propertyValue },
    });
  }

  const handleLogin = (e) => {
    //When save data is called we pass the data saved in state wiith name formData
    e.preventDefault();
    dispatch({ type: "LOGIN", formData: loginData.post.formData });
  };

  return (
    <div>
      <form onSubmit={handleLogin}> 
        <label>
          Enter email <input type="email" name="email" onChange={capture}/>
        </label>
        <br />
        <label>
          Enter password <input type="password" name="password" onChange={capture} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
