import { useState } from "react";
interface FormInput {
  title?: string;
  body?: string;
  userId?: string;
}

interface FormResult {
  title?: string;
  body?: string;
  userId?: string;
  id?: string;
}
export default function PostCreate() {
  const [formData, setFormData] = useState<FormInput>({});
  const [res, setRes] = useState<FormResult>({});
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{

    let propertyName =e.target.name
    let propertyValue =e.target.value
    setFormData({...formData,[propertyName]:propertyValue})

  }
  const handleSubmit=(e:React.FormEvent)=>{
    e.preventDefault()
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
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter title <input name="title" onChange={handleChange} />
        </label>
        <br />
        <label>
          Enter body <input name="body" onChange={handleChange} />
        </label>
        <br />
        <label>
          Enter userid <input name="userId" onChange={handleChange} />
        </label>
        <br />
        <button>Add</button>
      </form>
      <h1>{JSON.stringify(res)}</h1>
    </div>
  );
}
