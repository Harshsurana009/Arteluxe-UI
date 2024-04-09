import React, { useContext } from 'react'
import './Popular.css'
import Item from '../Item/Item'
import { ShopContext } from '../../Context/ShopContext'

const Popular = () => {
  const { all_product } = useContext(ShopContext);
  let product_count = 0;
  return (
    <div className='popular'>
      <h1>Popular in Magnets</h1>
      <hr/>
      <div className="popular-item">
        {all_product.map((item, i)=>{
          if(item.category[0] === 'magnet' && product_count < 4)
          {
            product_count += 1;
            return <
                Item key={i} 
                     id={item.id}
                     name={item.name}
                     image={item.image_url}
                     new_price={item.price}
                     old_price={item.sticker_price}
                />
          }
        })}
      </div>
    </div>
  )
}

export default Popular
