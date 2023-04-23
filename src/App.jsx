import './App.css';
import Citations from './components/Citation';
import Mescitations from './components/Mescitations';
import React from 'react';

const header = {
  "Access-Control-Allow-Origin": "https://kaamelott.chaudie"
}
const url = 'https://kaamelott.chaudie.re/api/random'
const url2 = 'https://jsonplaceholder.typicode.com/todos/1'
fetch(url, header)
.then((response2) => {
  return response2.json()
})
.then((result)=>{
  console.log(result)
})

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
