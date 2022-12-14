import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { getProductById } from '../utils';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

  const [item, setItem] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    setItem([])  
    if(id){
      getProductById(id)
      .then ((res) => {setItem(res)})
      .catch( (err) => console.log(err) )
    } else {
      console.log("error")
    }
  }, [id])
  


  return (
    
    <div>
        {item.length == 0 ? <h1> cargando ...</h1> : <ItemDetail item={item}/>}
    </div> 
      
  )
}

export default ItemDetailContainer;