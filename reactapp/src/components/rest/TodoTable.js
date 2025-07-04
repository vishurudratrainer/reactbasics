const TodoTable = ({ tableData ,error}) => {
    if(error.error!=null){
        return <div style={{color:"red"}}>{JSON.stringify(error)}</div>
    }
  if (tableData) {
    if (!Array.isArray(tableData)) {
      return <div>No data</div>;
    }
    if (tableData.length === 0) {
      return <div>No data</div>;
    } else {
      return (
        <table border={1}>
          <thead>
            <tr>
              <th>ID</th>
              <th>USERID</th>
              <th>TITLE</th>
              <th>COMPLETED</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr>
                <td>{row.id}</td>
                <td>{row.userId}</td>
                <td>{row.title}</td>
                <td>{row?.completed?.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
  }
  return <div>No data</div>;
};

export default TodoTable;
