import { useState } from "react";

const FetchPostCreate = () => {
  const [formData, setFormData] = useState({ title: "", body: "", userId: "" });
  const [res, setRes] = useState({});
  const handlePost = (e) => {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => setRes(json));
  };

  const capture = (e) => {
    let propertyName = e.target.name;
    let propertyValue = e.target.value;
    setFormData({ ...formData, [propertyName]: propertyValue });
  };

  return (
    <div>
      <form onSubmit={handlePost}>
        <label>
          Enter title <input name="title" onChange={capture} />
        </label>
        <br />
        <label>
          Enter body <input name="body" onChange={capture} />
        </label>
        <br />
        <label>
          Enter user id <input name="userId" onChange={capture} />
        </label>
        <br />
        <button>Add Posts</button>
      </form>
      <h1>{JSON.stringify(res)}</h1>
    </div>
  );
};

export default FetchPostCreate
