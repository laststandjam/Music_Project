import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Album_List} from "./Pages/Album_List"
import {Route, Link} from "wouter"
function App() {
  return (
    <div className="App">

      <h3>Start Listenting</h3>
      <Route path="/Albums"><Album_List/></Route>
      <Link href="/Albums">Click me</Link>
 
    </div>
  );
}

export default App;
