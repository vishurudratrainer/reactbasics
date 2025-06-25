import React from 'react';
import './App.css';
import Todos from './Todos';
import PostCreate from './PostCreate';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PostCreate/>
       <Todos/>
      </header>
    </div>
  );
}

export default App;
