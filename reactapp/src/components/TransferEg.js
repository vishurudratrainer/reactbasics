import { useNavigate } from "react-router-dom";

const TransferEg = (props) => {
  const navigate = useNavigate();

  const onTransfer = () => navigate("/calculator");
    return (
      <div>
        <button onClick={onTransfer}>Transfer to Calculator</button>
      </div>
    )
};

export default TransferEg;
