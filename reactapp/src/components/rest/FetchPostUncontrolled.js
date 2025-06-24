import { useState } from "react";
import { createRef } from "react";

const FetchPostUncontrolled = () => {
  const titleRef = createRef();
  const bodyRef = createRef();
  const userIdRef = createRef();
  const [res, setRes] = useState({});
  const handlePost = (e) => {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: titleRef.current.value,
        body: bodyRef.current.value,
        userId: userIdRef.current.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => setRes(json));
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

export default FetchPostUncontrolled;
