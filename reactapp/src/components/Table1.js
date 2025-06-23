//props in build varaiable available in each and every component
//it represent data which is passed to it
export default function Table1(props) {
  const data = props.tableData;

  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr>
              <td>{row.id}</td>
              <td>{row.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
