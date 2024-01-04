import {FC} from 'react'
import arrow_icon from '../Assets/breadcrum_arrow.png'

type BreadcrumProps = {
  product : {
    category :string;
    name : string;
  };
}

const Breadcrum:FC<BreadcrumProps> = ({product}) => {
  return (
    <div className='hidden md:flex md:justify-start md:gap-2 md:text-[#5e5e5e] md:text-lg md:font-semibold md:capitalize md:my-14 md:mx-16'>
        HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrum