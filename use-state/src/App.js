import React, { useState } from 'react';
import './App.css';

function App() {
  
  const [tech, setTech] = useState('Angular')

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <input type="text"  value={tech} onChange={(e) => setTech(e.target.value)}/>
        <br/>
        <input type="submit" value="reset" onClick={() => setTech('---')}/>  

       <p>Learn {tech}</p>
      </header>
    </div>
  );
}

export default App;
