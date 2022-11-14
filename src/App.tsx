import React from 'react';
import logo from './logo.svg';
import { useIntl } from 'react-intl';
import { Navigate, Route, Routes, Link } from 'react-router-dom';

import './App.css';
import {Album_List} from "./Pages/Album_List"


function App() {
  const {formatMessage} = useIntl()
console.log(JSON.stringify(formatMessage({id:'Route.albums'})))
  return (
    <div className="App">

      <h3>Start Listenting</h3>
    

      <Link to={JSON.stringify(formatMessage({id:'Route.albums'}))} >Click me</Link>
      <Routes>
   <Route path={`/"albums"`} element={<Album_List/>} /></Routes>
    </div>
  );
}

export default App;
