import { useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
const Nested = () => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const capture = (e) => {
    if(e.target?.value){
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + e.target.value)
      .then((data) => {
        let postData = data.data;
        setPost([postData]);

        axios
          .get(
            "https://jsonplaceholder.typicode.com/comments?postId=" +
              postData.id
          )
          .then((data) => {
            let commentsData = data.data;
            setComments(commentsData);
          });
      });
    }else{
        setPost([])
        setComments([])
    }
  };

  return (
    <div>
      <TextField
        required
        id="outlined-required"
        label="Enter post id"
        onChange={capture}
      />{" "}
      <Box sx={{ height: 200, width: "100%" }}>
        <DataGrid
          sx={{ m: 2, border: 2, borderColor: "primary.light" }}
          rows={post}
          columns={[
            { field: "userId", headerName: "USER_ID" },
            { field: "id", headerName: "ID" },
            { field: "title", headerName: "TITLE", flex: 1 },
            { field: "body", headerName: "BODY", flex: 1 },
          ]}
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
      <Box sx={{ height: 200, width: "100%" }}>
        <DataGrid
          sx={{ m: 2, border: 2, borderColor: "primary.light" }}
          rows={comments}
          columns={[
            { field: "postId", headerName: "POST_ID" },
            { field: "id", headerName: "ID" },
            { field: "email", headerName: "EMAIL", flex: 1 },
            { field: "name", headerName: "NAME", flex: 1 },
            { field: "body", headerName: "BODY", flex: 1 },
          ]}
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

export default Nested;
