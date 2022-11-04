import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {
  return (
    <div>
      <h4>{item.title} <p>{item.price}</p></h4>
      <img src={item.img}></img>
      <p>{item.body}</p>
      <ItemCount/>
    </div>
    
  )
}

export default ItemDetail