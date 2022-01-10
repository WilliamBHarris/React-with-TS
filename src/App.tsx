import React, { useState } from "react";
import "./App.css";
import List from './components/List'

interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: 'Lebron James',
      url: 'https://cdn.nba.com/headshots/nba/latest/104x760/2544.png',
      age: 36,
      note: 'allergic to teams'

    }
  ]);


  return (
    <div className="App">
      <List people={people} />
    </div>
  );
}

export default App;
