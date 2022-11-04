import React from 'react'
import Item from './Item';

const ItemList = ({items}) => {
  return (
    <section>
      {
        items.map((item => <Item key={item.id} {...item}/>))
      }
    </section>
  )
}

export default ItemList