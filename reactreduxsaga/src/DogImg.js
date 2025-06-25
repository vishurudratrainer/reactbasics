import { useDispatch, useSelector } from "react-redux";
import { FETCH_DOG } from "./Actions";
export default function DogImg() {
  const dispatch = useDispatch();
  const dogData = useSelector((state) => state.dog);
  const fetchDog = () => dispatch({ type: FETCH_DOG });

  return (
    <div>
      <button onClick={fetchDog}>Fetch Dog Image</button>
      <br />
      <h1>{JSON.stringify(dogData)}</h1>
      <img src={dogData.message} alt="unable to download" />
    </div>
  );
}
