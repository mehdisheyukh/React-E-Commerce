import { FC, useContext } from "react";
import star from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

type ProductDisplayProps = {
  product: {
    id: number;
    name: string;
    category: string;
    image: any;
    new_price: number;
    old_price: number;
  };
  addToCart?: (itemId: number) => void;
};

const ProductDisplay: FC<ProductDisplayProps> = ({ product }) => {
  const contextValue = useContext(ShopContext);

  const addToCart = contextValue?.addToCart;

  return (
    <div className="flex mt-8 overflow-hidden">
      {/* productdisplay-left */}
      <div className="pl-4 w-2 flex flex-col  flex-1">
        <h1 className="text-[#3d3d3d] mb-6 text-center text-lg md:text-sm">{product.name}</h1>

            <div className="flex justify-center">

        <div className="hidden md:flex md:pr-8 ">
        <div className="flex flex-col gap-6">
          <img className="h-[11rem]" src={product.image} alt="" />
          <img className="h-[11rem]" src={product.image} alt="" />
          <img className="h-[11rem]" src={product.image} alt="" />
          <img className="h-[11rem]" src={product.image} alt="" />
        </div>
      </div>

                <img className="w-5/6 md:w-1/2" src={product.image} alt="" />
            </div>
        

        <div className="flex items-center mt-4 gap-1 text-[#1c1c1c] text-lg">
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="flex my-5 gap-6 text-2xl font-bold">
          <div className="text-[#818181] line-through">
            ${product.old_price}
          </div>
          <div className="text-[#ff4141]">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint,
          suscipit minima cupiditate sapiente voluptatum laudantium, unde sunt
          officia ea debitis nulla nihil placeat explicabo ullam, nam eveniet et
          quisquam? Dolorem!
        </div>
        <div >
          <h1 className="mt-14 text-gray-600 text-lg font-semibold">Select Size</h1>
          <div className="flex my-6 gap-5">
            <div className="p-4 bg-gray-100 border border-gray-300 rounded cursor-pointer">S</div>
            <div className="p-4 bg-gray-100 border border-gray-300 rounded cursor-pointer">M</div>
            <div className="p-4 bg-gray-100 border border-gray-300 rounded cursor-pointer">L</div>
            <div className="p-4 bg-gray-100 border border-gray-300 rounded cursor-pointer">XL</div>
            <div className="p-4 bg-gray-100 border border-gray-300 rounded cursor-pointer">XXL</div>
          </div>
        </div>
        <button className="m-auto md:m-0 w-1/2 h-20 text-base font-semibold text-white bg-[#ff4141] mb-10 border-none outline-none cursor-pointer rounded-2xl"
          onClick={() => {
            addToCart
              ? addToCart(product.id)
              : console.error("addToCart is not available");
          }}
        >
          ADD TO CART
        </button>
        <p className="mt-2">
          <span>Category :</span>Women , T-Shirt, Crop Top
        </p>
        <p>
          <span className="font-semibold" >Tags :</span>Modern , Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
