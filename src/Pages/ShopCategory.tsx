import { FC, useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

interface ShopCategoryProps {
  banner: string; 
  category: string;
}

const ShopCategory:FC<ShopCategoryProps> = (props) => {

  const contextValue = useContext(ShopContext);

  const all_product = contextValue?.all_product

    if (!all_product) {
      return <p>Loading...</p>; // or handle the loading state as needed
    }

    const filteredItems = all_product.filter((item) => props.category === item.category);

  return (
    <div className='overflow-hidden'>
      <img className='block mx-auto my-4 w-5/6' src={props.banner} alt="" />

      <div className="flex gap-[5%] md:gap-[50%] justify-center items-center">
        <p>
          <span className='font-semibold'>Showing 1-12</span> out of 36 products
        </p>
        <div className="p-1.5 pl-5 pr-8 rounded-full border border-[#888]">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-3 mt-5 md:gap-7 md:mt-10">
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
      <div className='flex justify-center items-center mx-auto my-36 w-72 h-16 rounded-full bg-gray-300 text-gray-600 text-lg font-medium'>
          Explore More
      </div>
    </div>
  )
}

export default ShopCategory;