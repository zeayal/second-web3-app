import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../../images/logo.png";

const NavItem = ({ title, classProps }) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};

const Navbar = () => {
  const menus = ["SENDCREPTO", "Exchange", "NFTMARKET", "My"];
  const [sliderIsOpen, setSliderIsOpen] = useState(false);
  return (
    <div className="w-full text-white flex flex-row md:justify-center justify-between p-4">
      <div style={{ flex: "0.5" }}>
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="hidden md:flex flex-row  items-center flex-initial font-bold">
        {menus.map((title, index) => (
          <NavItem title={title} key={index} />
        ))}
        <li className="mx-7 px-4 py-1 bg-[#4158D0] rounded-full cursor-pointer">
          Login
        </li>
      </ul>

      <div className="md:hidden relative flex cursor-pointer">
        <AiOutlineMenu
          className="text-2xl "
          onClick={() => setSliderIsOpen(true)}
        />
        {sliderIsOpen && (
          <div className="fixed flex-colum right-0 top-0 w-[50vw] h-[100vh] blue-glassmorphism p-4 animate-slide-in">
            <ul>
              <li className="my-2">
                <AiOutlineClose
                  className="text-2xl"
                  onClick={() => setSliderIsOpen(false)}
                />
              </li>
              {menus.map((title, index) => (
                <NavItem title={title} key={index} classProps="my-2 text-lg" />
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
