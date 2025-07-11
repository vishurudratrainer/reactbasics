import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  const dispatch = useDispatch();
  const counterData = useSelector((state) => state.counter.count);
  const inc = () => dispatch({ type: "INC" });
  const dec = () => dispatch({ type: "DEC" });

  return (
    <div>
      <h1>Counter :{counterData}</h1>
      <br />
      <button onClick={inc}>INC</button>
      <button onClick={dec}>DEC</button>
    </div>
  );
}
