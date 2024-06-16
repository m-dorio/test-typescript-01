import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

interface IState{
  people: {
    name: string
    age: number
    url: string
    notes?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([]);

  people.map(person => {
    person.notes
  })

  return (
    <div className="App">
     <h1>Invited Game friends</h1>
    </div>
  );
}

export default App;
