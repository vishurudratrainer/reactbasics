import { useState } from "react";
import ColorContext from "../../context/ColorContext";
import SelectWithContextChild from "./SelectWithContextChild";
const SelectWithContext = () => {
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
      <ColorContext.Provider value={{ color: color }}>
        <SelectWithContextChild></SelectWithContextChild>
      </ColorContext.Provider>{" "}
    </div>
  );
};

export default SelectWithContext;
