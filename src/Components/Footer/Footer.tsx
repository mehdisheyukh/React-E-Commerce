import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pinterest_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-12 overflow-hidden">
      <div className="flex items-center gap-4">
        <img src={footer_logo} alt="" />
        <p className="text-[#383838] text-5xl font-bold">SHOPPER</p>
      </div>
      
      <ul className="flex flex-wrap justify-center list-none gap-10 text-[#252525] text-lg">
        {["Company", "Products", "Offices", "About", "Contact"].map(
          (item, index) => (
            <li key={index} className="cursor-pointer">
              {item}
            </li>
          )
        )}
      </ul>

      <div className="flex gap-5">
        <div className="p-1 pb-0.5 bg-[#fbfbfb] border border-[#ebebeb]">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="p-1 pb-0.5 bg-[#fbfbfb] border border-[#ebebeb]">
          <img src={pinterest_icon} alt="" />
        </div>
        <div className="p-1 pb-0.5 bg-[#fbfbfb] border border-[#ebebeb]">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="flex flex-col  w-5/6  gap-6 text-[#1a1a1a] text-center text-xl mb-7">
        <hr className="bg-[#c7c7c7] h-[3px] rounded-lg " />
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
