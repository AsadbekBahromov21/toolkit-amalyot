import React, { memo, useState } from "react";
import "./header.css";
import { CiLocationOn } from "react-icons/ci";
import { RiMenu2Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="container mx-auto">
        <div className=" flex items-center  gap-[69px] justify-between mt-5 ">
          <Link to={"/"}>
            <img
              className="w-[130px] h-[50px] object-contain "
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/redux-icon.png"
              alt=""
            />
          </Link>

          <div className=" rounded-[5px] border hidden gap-3 py-[6px] px-[8px] sm:flex md:flex lg:flex ">
            <button>
              <CiLocationOn />
            </button>
            <select
              className="border-none outline-none text-[14px] text-[#3BB77E]  "
              name=""
              id=""
            >
              <option value="">Reduc Toolik</option>
              <option value="">Redux</option>
              <option value="">React router dom</option>
              <option value="">Context api</option>
            </select>
          </div>
          <div
            className={`nav__collect flex  gap-3 ${isMenuOpen ? "show" : ""}`}
          >
            <div className="flex items-center gap-4 navbar navbar__collection">
              <div className="flex items-center gap-1">
                {/* <BasicModal ooo="Add" /> */}
                <NavLink
                  className={
                    "text-[16px] font-[400] text-[#fff] lg:text-[#7e7e7e] "
                  }
                  to={"/wishlist"}
                >
                  Admin
                </NavLink>
              </div>
              <div className="flex items-center gap-1 navbar__collection">
                <NavLink
                  className={
                    "text-[16px] font-[400] text-[#fff] lg:text-[#7e7e7e] "
                  }
                  to={"/category"}
                >
                  Category
                </NavLink>
              </div>
            </div>
          </div>
          <div onClick={toggleMenu} className="navbar__menu">
            <RiMenu2Fill />
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
