import React from 'react'
import Home from './Home'
import ItemListContainer from './ItemListContainer'
import { Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './ItemDetailContainer'

const Main = () => {
  return  <main>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/productos' element={<ItemListContainer/>}/>
        <Route path='/productos/:categ' element={<ItemListContainer/>}/>
        <Route path='/carrito' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<h1>No se ha encontrado la página.</h1>}/>
    </Routes>
    
  </main>

   
   

}
export default Main