import React from 'react'

const ItemListContainer = ({usuario}) => {
  return (
    <div className='container'>
        <div className='hero'>
            <h2>Bienvenido <span>{usuario.nombre} {usuario.apellido}</span></h2>
            <p>¿Listo para pelotear?</p>
        </div>
    </div>
  )
}

export default ItemListContainer