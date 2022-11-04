import React from 'react'
import { NavLink } from 'react-router-dom'

const Item = ({id, title, price, body, img}) => {

  return (
    <article>
        <h3>{title}</h3>       
        <p>{price}</p>
        <img src={img} alt={title}></img>
        <p>{body}</p>
        <button>
            <NavLink to={`/item/${id}`}> Ver Detalle</NavLink>
        </button>
    </article>
  )
}

export default Item
