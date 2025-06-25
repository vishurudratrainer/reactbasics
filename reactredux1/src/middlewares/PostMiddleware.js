const PostMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action) {
      if (action.type === "SAVE_POST_DATA") {//We can calling post method with formData from action to save
        setTimeout(() => {
          fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(action.formData),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((response) => response.json())
            .then((data) => dispatch({ type: "SAVED_POST_DATA", result: data }));
        }, 5000);
      }
    }

    next(action); //next is basically used to forward this action to the enxt middleware/reducer
  };

export default PostMiddleware;
