import './App.css';
import Citations from './components/Citation';
import Mescitations from './components/Mescitations';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p id='titreApp'>Citations</p>
      </header>
      <Citations/>
      <Mescitations/>
    </div>
  );
}

export default App;
