import { useState } from "react";
import "./App.css";
import Nav from "./components/navigation/Nav";
import BgContext from "./context/BgContext";
export default function App() {
  const [bgColor, setBgColor] = useState("");
  const captureColor = (e) => setBgColor(e.target.value);
  return (
    <div className="App">
      <BgContext.Provider value={{ bgColor: bgColor }}>
        <select onChange={captureColor}>
          <option value={""}>Select</option>
          <option value={"white"}>White</option>
          <option value={"black"}>Black</option>
        </select>
        <Nav />
      </BgContext.Provider>
    </div>
  );
}
