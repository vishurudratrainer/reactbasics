import { useContext } from "react";
import ColorContext from "../../context/ColorContext";

const SelecWithContextGrandChild = () => {
  const colorContext=useContext(ColorContext)
  return (
    <div style={{color:colorContext.color }}>
      I want to be displayed in color given by my grand parent
    </div>
  );
};

export default SelecWithContextGrandChild;
