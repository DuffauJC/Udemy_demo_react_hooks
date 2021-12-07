import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [input, setInput] = useState('React App')
  const [todos, setTodos] = useState([])

  useEffect(() => {
    document.title = input
  })

  return (

    <div className="App">
      <header className="App-header">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <p>{input}</p>

        <input type="submit" value="add"
          onClick={
            () => {
              setTodos(todos.concat(input))
              setInput('')
              console.log(todos)
            }} />
        
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={index} className="white">{todo}</li>
            )
          })}
        </ul>

      </header>
    </div>

  );
}

export default App;
