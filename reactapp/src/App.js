import "./App.css";
import Table1 from "./components/Table1";
function App() {
  return (
    <div className="App">
      <Table1
        tableData={[
          { id: 1, name: "Vishwa" },
          { id: 2, name: "Shiv" },
        ]}
      />

      <Table1
        tableData={[
          { id: 1, name: "Raj" },
          { id: 2, name: "Raju" },
        ]}
      />
    </div>
  );
}

export default App;
