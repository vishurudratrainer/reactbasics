import { useState } from "react";
import SelectChild from "./SelectChild";

const Select = () => {
  const [color, setColor] = useState("");
  const captureColor = (e) => setColor(e.target.value);
  return (
    <div>
      <label>
        Select ur color{" "}
        <select onChange={captureColor}>
          <option>Select something</option>
          <option value="red">RED</option>
          <option value="blue">BLUE</option>
          <option value={"green"}>GREEN</option>
          <option value={"pink"}>PINK</option>
        </select>
      </label>
      <SelectChild color={color}></SelectChild>
    </div>
  );
};

export default Select
