import { useContext } from "react";
import ColorContext from "../../context/ColorContext";
import BgContext from "../../context/BgContext";
import AuthContext from "../../context/AuthContext";

const SelecWithContextGrandChild = () => {
  const colorContext = useContext(ColorContext);
  const bgContext = useContext(BgContext);
  const authContext =useContext(AuthContext)
  return (
    <div
      style={{ color: colorContext.color, backgroundColor: bgContext.bgColor }}
    >
      I want to be displayed in color given by my grand parent
      <h1>Autheticated {JSON.stringify(authContext)}</h1>
    </div>
  );
};

export default SelecWithContextGrandChild;
