import React from "react";
import { Addition } from './components/Addition';
import { Subtraction } from './components/Subtraction';
import { Multiplication } from './components/Multiplication';
import { Division } from './components/Division';


export function App() {
  return (
    <div id="app">
      <h1>Home 1</h1>
      <Addition a={5} b={5} />
      <hr />
      <Subtraction a={10} b={5} />
      <hr />
      <Multiplication a={4} b={5} />
      <hr />
      <Division a={100} b={50} />
    </div>
  );
} 
