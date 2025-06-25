import './App.css';
import DogImg from './DogImg';
import PostCreate from './PostCreate';
import Todo from './Todo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PostCreate/>
       <DogImg/>
       <Todo/>
      </header>
    </div>
  );
}

export default App;
