import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import UlNav from "./UlNav";
import logo from "../../assets/shared/desktop/logo.svg";
import cartIcon from "../../assets/shared/desktop/icon-cart.svg";
import { IoMenu, IoClose } from "react-icons/io5";
import { MyContext } from "../Context/context";

function MainNav() {
  const [menu, setMenu] = useState(false);
  const { amout, isOpen, setOpen } = useContext(MyContext);

  function handleMenu(e) {
    setMenu(!menu);
  }

  function handleCart() {
    setOpen(!isOpen);
  }

  function toggleMenu() {
    setMenu(false);
  }

  const st = {
    top: `${menu ? "103px" : "-203px"}`,
    transition: "all 0.4s",
  };
  return (
    <div className=" bg-almostBlack z-20  w-full">
      <div className="container relative max-sm:px-[2rem]   ">
        <div className="border-b flex  py-8 items-center  justify-between border-verylightGray">

          <button
            aria-label={menu ? "Close menu" : "Open menu"}
            onClick={handleMenu}
            className="hidden max-lg:block text-white max-lg:mr-[2.5rem]  text-[1.9rem]"
          >
            {menu ? <IoClose /> : <IoMenu />}
          </button>

          <NavLink to="/" className="max-lg:-mr-auto w-auto max-lg:flex-1 ">
            <img src={logo} alt="logo" className="max-sm:m-auto" />
          </NavLink>


          <UlNav
            toggleMenu={toggleMenu}
            st={st}
            cl="max-lg:flex-col  max-lg:absolute text-[0.88rem] max-lg:left-0 max-lg:top-[103px] max-lg:w-full max-lg:text-almostBlack max-lg:text-center max-lg:bg-white flex 
                            text-white gap-9 max-lg:gap-4 max-lg:py-5 lg:-ml-[150px] flex-row  z-10"
          ></UlNav>
          <button className={`relative  w-auto max-lg:ml-[2.5rem]`} onClick={handleCart}>
            <img src={cartIcon} className="w-[23px] h-[20px]" alt="cart" />

            {amout.totalQty > 0 ? (
              <p className="absolute text-white -top-3 -right-3 px-[.4rem] text-[.8rem] font-semibold rounded-full bg-orange">
                {amout.totalQty}
              </p>
            ) : (
              ""
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainNav;
