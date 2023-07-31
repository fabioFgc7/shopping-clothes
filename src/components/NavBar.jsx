import { Link } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";
import { useState } from "react";
import { Bottons } from "./Bottons";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [isBotton, setIsBotton] = useState(false);
  const [icons, setIcons] = useState(faBars);
  const handleIcons = () => {
    if (!isBotton) {
      setIcons(faX);
      setIsBotton(true);
    } else {
      setIcons(faBars);

      setIsBotton(false);
    }
  };
  return (
    <>
      <Bottons
        icons={icons}
        isBotton={isBotton}
        handleIcons={handleIcons}
      />
      <div
        className={`flex justify-center -translate-x-full md:translate-x-0 transition-all duration-300 ease-in ${
          isBotton ? "translate-x-0" : "-translate-x-full"
        }  md:items-center p-3  w-full  md:h-auto h-screen fixed z-10 bg-[#000] top-0 `}>
        <h1 className='text-xl font-bold font-serif text-[#ffc04a] fixed md:top-3   left-auto right-auto md:left-2  z-20 select-none  '>
          Shopping Clothes
        </h1>
        <nav
          className={`flex justify-center  md:mt-0 mt-10 p-3   md:w-full w-16 md:h-auto h-screen fixed z-10 bg-[#000] top-0 `}>
          <ul className='flex md:flex-row flex-col md:justify-center items-center md:space-x-4 space-y-4 md:space-y-0 '>
            <li
              className=' overflow-hidden'
              onClick={handleIcons}>
              <Link
                className='font-mono text-[19px]  relative after:absolute after:h-[2px] after:w-full after:bg-slate-100 after:duration-300 after:ease-linear after:inline-block after:right-0 after:bottom-0 after:-left-full  after:hover:left-0'
                to='/'>
                Home
              </Link>
            </li>
            <li
              className=' overflow-hidden'
              onClick={handleIcons}>
              <Link
                className='font-mono text-[19px]  relative after:absolute after:h-[2px] after:w-full after:bg-slate-100 after:duration-300 after:ease-linear after:inline-block after:right-0 after:bottom-0 after:-left-full  after:hover:left-0'
                to='/men'>
                Men
              </Link>
            </li>
            <li
              className=' overflow-hidden'
              onClick={handleIcons}>
              <Link
                className='font-mono text-[19px]  relative after:absolute after:h-[2px] after:w-full after:bg-slate-100 after:duration-300 after:ease-linear after:inline-block after:right-0 after:bottom-0 after:-left-full  after:hover:left-0'
                to='/women'>
                Women
              </Link>
            </li>
          </ul>
        </nav>
        <ShoppingCart handleIcons={handleIcons} />
      </div>
    </>
  );
};

export default NavBar;
