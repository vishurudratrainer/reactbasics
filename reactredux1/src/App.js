import './App.css';
import Counter from './components/Counter';
import PostCreate from './components/PostCreate';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PostCreate/>
       <Counter/>
       <Todos/>
      </header>
    </div>
  );
}

export default App;
