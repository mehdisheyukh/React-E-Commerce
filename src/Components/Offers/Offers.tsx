import exclusive_image from "../Assets/exclusive_image.png";

function Offers() {
  return (
    <div className="flex md:h-[35rem] mt-5 md:mt-14 md:m-auto md:w-2/3 bg-gradient-to-b from-[#fde1ff] justify-center overflow-hidden">
      <div className="flex flex-col md:flex-1 items-center md:items-start mt-8">
        <h1 className="text-[#171717] text-3xl font-semibold md:text-7xl">
          Exclusive
        </h1>
        <h1 className="text-[#171717] text-3xl font-semibold md:text-7xl">
          Offers For You
        </h1>
        <p className="text-[#171717] text-base md:text-2xl font-semibold">
          ONLY ON BEST SELLERS PRODUCTS
        </p>
        <button className="w-32 h-10 md:w-72 md:h-20 bg-[#ff4141] text-white text-sm font-medium mt-5 cursor-pointer rounded-full border-0">
          Check Now
        </button>
      </div>
      <div className="hidden md:flex md:flex-1 md:items-center md:justify-end md:pt-12">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
}

export default Offers;
