import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './Components/List';

interface IState{
  people: {
    name: string
    age: number
    url: string
    notes?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "John Smith",
      url: "https://www.signivis.com/img/custom/avatars/member-avatar-01.png",
      age: 32,
      notes: "Lorem ipsum dolor sit amet"
    }
  ]);
  // Pass data to props

  return (
    <div className="App">
      <h1>Invited Game friends</h1>
      {/* pass data props here */}
      <List people={people} />
    </div>
  );
}

export default App;
