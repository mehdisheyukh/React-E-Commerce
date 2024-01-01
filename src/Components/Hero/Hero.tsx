import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="flex overflow-hidden bg-gradient-to-b from-pink-200 ">
      <div className="flex flex-col  items-start m-auto leading-4 mt-8 leading-8 md:flex-1 md:items-center md:relative md:top-[50vh] ">
        <h2 className="text-[#090909] text-base md:text-2xl font-semibold">NEEW ARRIVALS ONLY</h2>
        
        <div>
          <div className="flex items-center gap-4">
            <p className="text-[#171717] text-xl font-bold">new</p>
            <img className="w-10" src={hand_icon} alt="" />
          </div>
          <p className="text-[#090909] text-xl md:text-2xl font-semibold">collection</p>
          <p className="text-[#090909] text-xl md:text-2xl font-semibold">for everyone</p>
        </div>
        
        <div className="flex text-[10px] justify-center items-center gap-4  h-8  bg-[#ff4141] rounded-full text-white text-base mt-4 md:w-72 md:text-lg md:h-16 md:font-medium md:mt-8">
          <div>Latest Collection</div>
          <img className="w-2/12 md:w-auto" src={arrow_icon} alt="" />
        </div>
      </div>

      <div className="hidden md:flex md:flex-1 md:items-center md:justify-center">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
