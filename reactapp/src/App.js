import "./App.css";
import Calcultor from "./components/Calculator";
import Counter from "./components/Counter";
import StudentForm from "./components/StudentForm";
export default function App() {
  return (
    <div className="App">
     <Counter/>
     <Calcultor/>
     <StudentForm/>
    </div>
  );
}

