import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Sum} from "./03/03";

function App() {


    const names = ['Jan', 'Tommy', 'March', 'Andrew', 'Mayk'];
    const users = [{name:'Jan'}, {name:'Tommy'}, {name:'March'}, {name:'Andrew'}, {name:'Mayk'}];
    const liElements = users.map( (n,index) => <li key={index}>{index} - {n.name}</li>)
  return (
    <ul>
      {names.map( (n, index) => <li key={index}>{n}</li>)}
      {liElements}
    </ul>
  );
}

export default App;
