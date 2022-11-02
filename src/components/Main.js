import React from 'react'
import Home from './Home'
import ItemListContainer from './ItemListContainer'
import { Routes, Route } from 'react-router-dom'

const Main = () => {
  return  <main>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/gomas' element={<ItemListContainer/>}/>
        <Route path='/maderas' element={<ItemListContainer/>}/>
        <Route path='/paletas' element={<ItemListContainer/>}/>
        <Route path='/accesorios' element={<ItemListContainer/>}/>
        <Route path='*' element={<h1>No se ha encontrado la página.</h1>}/>
    </Routes>
    
  </main>

   
   

}
export default Main