import { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct';

const Product = () => {

  const contextValue = useContext(ShopContext);
  const all_product = contextValue?.all_product;
  const {productId} = useParams();

  if (!all_product) {
    return <p>Loading...</p>; // or handle the loading state as needed
  }

  const product = all_product.find( (e)=> e.id === Number(productId));

  if (!product) {
    return <p>Product not found</p>; // or redirect to a 404 page
  }
  
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProduct />
    </div>
  )
}

export default Product;