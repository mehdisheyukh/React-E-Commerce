import data_product from '../Assets/data'
import Item from '../Item/Item'

function RelatedProduct() {
  return (
    <div className='flex flex-col items-center gap-2 mb-16'>
        <h1 className='text-[#171717] text-3xl font-semibold'>Related Products</h1>
        <hr className='w-12 h-1 rounded-full bg-[#171717]' />
        <div className="mt-12 flex  justify-center flex-wrap gap-7">
            {data_product.map((item,i)=> {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default RelatedProduct