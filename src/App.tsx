import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [people, setPeople] = useState([
    {
    name: "LeBron James",
      url: "",
      age: 30,
    info:"Allergic to its team mates"
    },
    {
      name: "Kobe",
      url: "",
      age: 31
    }
  ]);

  return (
    <div className="App">
     <h1>Invited Game friends</h1>
    </div>
  );
}

export default App;
