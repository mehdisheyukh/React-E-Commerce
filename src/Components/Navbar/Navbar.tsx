import { useContext, useState } from 'react'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import {ShopContext} from '../../Context/ShopContext'

export const Navbar = () => {

    const [menu , setMenu] = useState("shop");

    const contextValue  = useContext(ShopContext);
    
    const getTotalCartItems = contextValue?.getTotalCartItems;      

  return (
    <div className='flex justify-around	p-4 shadow-[0_1px_3px_-2px_black]'>
        <div className='flex items-center gap-3'>
            <img src={logo} alt="" />
            <p className='text-[#171717] text-lg font-semibold sm:text-3xl lg:text-4xl'>SHOPPER</p>
        </div>
        
        <ul className='hidden md:flex items-center list-none gap-12 text-[#626262] text-xl font-medium'>
            <li onClick={ ()=> {setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Home</Link>{menu==="shop"?<hr className='border-none w-{80%} h-1 rounded-xl	bg-[#FF4141]'/>:<></>}</li>
            <li onClick={ ()=> {setMenu("mens")}}><Link style={{textDecoration: 'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr className='border-none w-{80%} h-1 rounded-xl	bg-[#FF4141]'/>:<></>}</li>
            <li onClick={ ()=> {setMenu("womens")}}><Link style={{textDecoration: 'none'}} to='womens'>Women</Link>{menu==="womens"?<hr className='border-none w-{80%} h-1 rounded-xl	bg-[#FF4141]'/>:<></>}</li>
            <li onClick={ ()=> {setMenu("kids")}}><Link style={{textDecoration: 'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr className='border-none w-{80%} h-1 rounded-xl	bg-[#FF4141]'/>:<></>}</li>
        </ul>

        <div className="flex items-center gap-1">
            <Link to='/login'><button className='cursor-pointer bg-white text-[#515151] text-xl font-medium w-24  h-10 outline-none border-solid border-2 border-[#7a7a7a] rounded-full active:bg-[#f3f3f3]'>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="flex justify-center items-center h-[22px] w-[22px] -mt-7 -ml-5 rounded-xl bg-[#ff0000] text-sm text-white">{getTotalCartItems ? getTotalCartItems() : 0}</div>
        </div>
    </div>
  )
}
