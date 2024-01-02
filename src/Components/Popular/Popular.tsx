import data_product from '../Assets/data.js'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className='flex flex-col items-center mt-4'>
        <h1 className='text-[#171717] md:text-3xl font-semibold'>POPULAR IN WOMEN</h1>
        <hr className='w-32 md:w-48 h-0 rounded-lg bg-[#252525]' />
        <div className="flex flex-wrap justify-center gap-3 mt-5 md:gap-7 md:mt-10">
            {data_product.map( (item,i)=> {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default Popular;