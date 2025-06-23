import { useNavigate } from "react-router-dom";
import GoLogin from "./login/GoLogin";

const TransferEg = (props) => {
  const navigate = useNavigate();

  const onTransfer = () => navigate("/calculator");
  if (props.isAuthenticated)
    return (
      <div>
        <button onClick={onTransfer}>Transfer to Calculator</button>
      </div>
    );
  else {
    return <GoLogin />;
  }
};

export default TransferEg;
