import React from 'react';
import logo from './logo.svg';
import { useIntl } from 'react-intl';
import { Navigate, Route, Routes, Link } from 'react-router-dom';

import './App.css';
import {Navbar} from "./Components/Navbar"
import { Album_List } from "./Pages/Album_List"
import Band_List from './Pages/Band_List';
import { Album_Detail } from './Pages/Album_Detail';


function App() {

  const intl = useIntl()
  const { formatMessage } = useIntl()
  console.log(JSON.stringify(formatMessage({ id: 'Route.albums' })))
  console.log("/"+intl.formatMessage({id: 'Route.albums'})+"/:id")
  return (
    <div className="App">

     <Navbar/>

      <Routes>
        <Route path={"/"+intl.formatMessage({id: 'Route.albums' })} element={<Album_List/>} />
        <Route path={"/"+intl.formatMessage({id: 'Route.albums'})+"/:id"} element={<Album_Detail/>}/>
        <Route path={"/"+intl.formatMessage({id: 'Route.bands' })} element={<Band_List/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
