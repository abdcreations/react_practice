import React from 'react'
import './App.css';
import Counter from './Componants/Counter'
import TicTac from './Componants/ticTacToe/TicTac'

function App() {
  return (
    <div className="App">
      <Counter/>
      <TicTac/>
    </div>
  );
}

export default App;
