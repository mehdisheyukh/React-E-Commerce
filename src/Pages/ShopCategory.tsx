import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

interface ShopCategoryProps {
  banner: string; 
  category: string;
}

const ShopCategory:React.FC<ShopCategoryProps> = (props) => {

  const contextValue = useContext(ShopContext);

  const all_product = contextValue?.all_product

    if (!all_product) {
      return <p>Loading...</p>; // or handle the loading state as needed
    }

    const filteredItems = all_product.filter((item) => props.category === item.category);

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexStore">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
      {filteredItems.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
      <div className='shopcategory-loadmore'>
          Explore More
      </div>
    </div>
  )
}

export default ShopCategory;