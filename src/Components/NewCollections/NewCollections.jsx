import React, { useContext } from 'react'
import './NewCollections.css'
// import new_collections from '../Assets/new_collections'
import Item from '../Item/Item'
import { ShopContext } from '../../Context/ShopContext'

const NewCollections = () => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className='new-collections'>
      <h1>New Collections</h1>
      <hr/>
      <div className="collection-items">
        {all_product.slice(0, 8).map((item, i)=>{
            return <Item key={i} 
                         id={item.id}
                         name={item.name}
                         image={item.image_url}
                         new_price={item.price}
                         old_price={item.sticker_price}/>
        })}
      </div>
    </div>
  )
}

export default NewCollections
