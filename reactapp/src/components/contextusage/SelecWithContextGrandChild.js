import { useContext } from "react";
import ColorContext from "../../context/ColorContext";
import BgContext from "../../context/BgContext";

const SelecWithContextGrandChild = () => {
  const colorContext = useContext(ColorContext);
  const bgContext = useContext(BgContext);
  return (
    <div
      style={{ color: colorContext.color, backgroundColor: bgContext.bgColor }}
    >
      I want to be displayed in color given by my grand parent
    </div>
  );
};

export default SelecWithContextGrandChild;
