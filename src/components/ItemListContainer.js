import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductByCateg } from '../utils';
import ItemList from './ItemList';

const ItemListContainer = () => {

  const [items, setItems] = useState([]);
  const {categ} = useParams();


  useEffect(()=> {
    setItems([])
    if(categ){
      getProductByCateg(categ)
      
      .then ( (res) => {setItems(res)} )
      .catch( (err) => console.log(err) )
    } else {
      getProducts()
      .then ( (res) => setItems(res) )
      .catch( (err) => console.log(err) )
    }
  }, [categ])


  
  return ( 
      <div>
        <h2>Productos</h2>
        {items.length == 0 ? <h1> cargando ...</h1> : <ItemList items={items}/>}
      </div>    
  )
}

export default ItemListContainer;