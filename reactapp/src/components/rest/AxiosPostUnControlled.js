import { useState } from "react";
import { createRef } from "react";
import axios from "axios";
const AxiosPostUnControlled = () => {
  const titleRef = createRef();
  const bodyRef = createRef();
  const userIdRef = createRef();
  const [res, setRes] = useState({});
  const handlePost = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title: titleRef.current.value,
          body: bodyRef.current.value,
          userId: userIdRef.current.value,
        },
        {
          "Content-type": "application/json; charset=UTF-8",
        }
      )
      .then((json) => setRes(json.data));
  };

  return (
    <div>
      <form onSubmit={handlePost}>
        <label>
          Enter title <input name="title" ref={titleRef} />
        </label>
        <br />
        <label>
          Enter body <input name="body" ref={bodyRef} />
        </label>
        <br />
        <label>
          Enter user id <input name="userId" ref={userIdRef} />
        </label>
        <br />
        <button>Add Posts</button>
      </form>
      <h1>{JSON.stringify(res)}</h1>
    </div>
  );
};

export default AxiosPostUnControlled;
