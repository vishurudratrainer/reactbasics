const TodosMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action) {
      if (action.type === "FETCH_TODO") {
        setTimeout(() => {
          fetch("https://jsonplaceholder.typicode.com/todos")
            .then((data) => data.json())
            .then((data) => dispatch({ type: "FETCHED_TODO", data: data }));
        }, 5000);
      }
    }
    next(action); //next is basically used to forward this action to the enxt middleware/reducer
  };

export default TodosMiddleware;
