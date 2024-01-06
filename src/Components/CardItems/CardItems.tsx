import { useContext } from 'react'
import {ShopContext} from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CardItems = () => {
  
  const shopContext = useContext(ShopContext);

  if (!shopContext || !shopContext.all_product || !shopContext.cartItems || !shopContext.removeFromCart || !shopContext.getTotalCartAmount) {
    return null; // or return an appropriate loading/error component
  }

    const { all_product , cartItems , removeFromCart ,getTotalCartAmount } = shopContext;


  return (
    <div className='my-10 mx-10 md:my-24 md:mx-40 overflow-hidden'>
      {/* cartitems-format-main */}
            <div className="hidden md:grid md:grid-cols-6 items-center">
              <p>Products</p>
              <p>Title</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e)=>{
                if(cartItems[e.id]>0)
                {
                  return <div key={e.id} className=''>
                  <div className="flex flex-wrap gap-10 md:gap-0 mt-2 md:grid md:grid-cols-6 md:items-center">
                    <img src={e.image} alt="" className='w-1/2  rounded'/>
                    <p className='w-2 md:w-auto'>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                    <p>${e.new_price*cartItems[e.id]}</p>
                    <img className='h-2 md:h-4 cursor-pointer ' src={remove_icon} onClick={()=> {removeFromCart(e.id)}} alt="" />
                  </div>
                  <hr />
                </div> 
              }
              return null;
            })}
            <div className="flex flex-col-reverse mt-8 md:flex-row">
              <div className="flex flex-1 flex-col mr-48 gap-10">
                <h1>Cart Totals</h1>
                <div>
                    <div className="flex justify-between gap-16">
                      <p>Subtotal</p>
                      <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="flex justify-between gap-16">
                      <p>Shipping Fee</p>
                      <p>Free</p>
                    </div>
                    <hr />
                    <div className="flex justify-between gap-16">
                      <h3>Total</h3>
                      <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button className='bg-[#ff5a5a] text-[#fff] w-[16rem] h-[3.5rem] text-base font-semibold cursor-pointer outline-none border-0 rounded'>PROCEED TO CHECKOUT</button>
              </div>
              <div className="flex-1 text-base font-medium">
                <p className='text-[#555]'>If you have a promo code, Enter it here</p>
                <div>
                  <input className='w-[31rem] mt-4 bg-[#eaeaea] h-12 rounded mb-2' type="text" placeholder='promo code' />
                  <button className='w-40 h-14 bg-black text-white cursor-pointer text-base rounded'>Submit</button>
                </div>
              </div>
            </div>
    </div>
  )
}

export default CardItems