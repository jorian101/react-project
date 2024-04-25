import React from 'react'
import RickAndMortyApp from "../RickAndMortyApp";
import Home from "../components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Navigation = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path="/character" element={<RickAndMortyApp/>} />
        <Route path="/*" element={<p>ERROR 404 RECUSO NO ENCONTRADO</p>} />
    </Routes>
    </BrowserRouter>
  )
}

export default Navigation
