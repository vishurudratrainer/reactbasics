import { useDispatch, useSelector } from "react-redux";

export default function PostCreate() {
  const dispatch = useDispatch();
  const postData = useSelector((state) => state);
  const capture = (e) => {
    let propertyName = e.target.name;
    let propertyValue = e.target.value;
    dispatch({
      type: "POST_DATA_CAPTURE",
      formData: { [propertyName]: propertyValue },
    });
  };

  const sendData = (e) => {
    e.preventDefault();
    dispatch({ type: "SAVE_POST_DATA", formData: postData.post.formData });
  };
  return (
    <div>
      <form onSubmit={sendData}>
        <label>
          Enter title <input name="title" onChange={capture} />
        </label>
        <br />
        <label>
          Enter body <input name="body" onChange={capture} />
        </label>
        <br />
        <label>
          Enter userid <input name="userId" onChange={capture} />
        </label>
        <button type="submit">Add Data</button>
        <br />
      </form>
      <h1>{JSON.stringify(postData.post.formData)}</h1>
      <h1>{JSON.stringify(postData.post.res)}</h1>
    </div>
  );
}
