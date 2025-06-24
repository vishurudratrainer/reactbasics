import { useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
const Todo = () => {
  const fetchTodo = () =>
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((data) => setTodos(data.data))
      .catch((e) => console.log(e));

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
      headerClassName: "super-app-theme--header",
    },
    { field: "userId", headerName: "USER_ID", width: 90 },
    { field: "title", headerName: "TITLE", flex: 1 },
    { field: "completed", headerName: "COMPLETED", width: 90 },
  ];

  const [todos, setTodos] = useState([]);

  return (
    <div>
      <Button variant="contained" onClick={fetchTodo}>
        Fetch todo
      </Button>
      <br />
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          sx={{ m: 2, border: 2, borderColor: "primary.light" }}
          rows={todos}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
};

export default Todo;
