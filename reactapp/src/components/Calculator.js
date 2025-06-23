import { useState } from "react";
import GoLogin from "./login/GoLogin";
const Calcultor = (props) => {
  const [ip1, setIp1] = useState(0);
  const [ip2, setIp2] = useState(0);
  const [res, setRes] = useState(0);
  const captureIp1 = (e) => setIp1(e.target.value);
  const captureIp2 = (e) => setIp2(e.target.value);

  const doNothing = (e) => e.preventDefault();
  const add = () => setRes(parseInt(ip1) + parseInt(ip2));
  const sub = () => setRes(parseInt(ip1) - parseInt(ip2));
  const mul = () => setRes(parseInt(ip1) * parseInt(ip2));
  const div = () => setRes(parseInt(ip1) / parseInt(ip2));
  if(props.isAuthenticated)
  return (
    <div>
      <form onSubmit={doNothing}>
        <label>
          Enter number 1: <input type="number" onChange={captureIp1} />
        </label>
        <br />
        <label>
          Enter number 2: <input type="number" onChange={captureIp2} />
        </label>
        <br />
        <button onClick={add}>+</button>
        <button onClick={sub}>-</button>
        <button onClick={mul}>*</button>
        <button onClick={div}>/</button>
        <br />
        <h1>Result is {res}</h1>
      </form>
    </div>
  );
  else{
    return (<GoLogin/>)
  }
};

export default Calcultor;
