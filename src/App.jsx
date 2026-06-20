import React from "react";
import { BrowserRouter, Routes, Route, Link, Navigate} from 'react-router-dom';
import {useState, useEffect} from "react";
import Quotes from "./Components/Quotes";

function App(){
  return( 
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Quotes/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
