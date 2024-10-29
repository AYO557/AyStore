import { FaSearch } from "react-icons/fa";
import { FaBars, FaCartShopping } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/icons/ay-logo.svg";
import { useState } from "react";

function NavBox({ user }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <nav className="shadow-lg lg:px-[140px] sm:px-10 sm:flex justify-between items-center h-[10vh] hidden">
      <div className="logo">
        <h2 className="font-bold text-3xl text-blue-600 hover:scale-105 cursor-pointer transition-all items-center flex gap-0">
          <img className="w-14" src={logo} alt="" />
          AyStore
        </h2>
      </div>
      <menu
        className={`${
          isFocused
            ? "sm:hidden lg:flex items-center gap-8 font-semibold"
            : "flex items-center gap-8 font-semibold"
        }`}
      >
        <li className="">
          <NavLink
            className={({ isActive, isPending }) => {
              return isActive ? "border-line" : "nav-link";
            }}
            to={"/"}
          >
            Home <div className=""></div>
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to={"/catergories"}
            className={({ isActive, isPending }) => {
              return isActive ? "border-line" : "nav-link";
            }}
          >
            Categories
            <div className=""></div>
          </NavLink>
        </li>
        <li className="">
          <NavLink
            className={({ isActive, isPending }) => {
              return isActive ? "border-line" : "nav-link";
            }}
            to={"shop"}
          >
            Shops
            <div className=""></div>
          </NavLink>
        </li>
        <li className="">
          <NavLink
            className={({ isActive, isPending }) => {
              return isActive ? "border-line" : "nav-link";
            }}
            to={"help"}
          >
            Help
            <div className=""></div>
          </NavLink>
        </li>
      </menu>
      <div className="flex items-center gap-8">
        {!user && (
          <div className="items-center flex gap-2">
            <Link
              to="auth/"
              className="bg-blue-500 px-4 py-1 font-bold text-white rounded-md border border-blue-500 hover:border hover:border-blue-500 hover:text-blue-500 hover:bg-transparent"
            >
              Login
            </Link>
            <Link
              to="auth/signup"
              className="bg-blue-500 px-4 py-1 font-bold text-white rounded-md border border-blue-500 hover:border hover:border-blue-500 hover:text-blue-500 hover:bg-transparent"
            >
              Sign Up
            </Link>
          </div>
        )}
        {user && (
          <NavLink to="/" className="text-blue-500 hover:text-blue-200">
            <FaCartShopping size={25} />
          </NavLink>
        )}
        <span
          className="text-blue-500 bg-blue-100 py-2 pl-2 pr-5 rounded-[1rem] flex items-center gap-1 search"
          onClick={() => setIsFocused(true)}
        >
          <FaSearch size={25} />
          <input
            type="search"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`w-[10px] bg-blue-100 outline-none text-black ${
              isFocused && "w-[150px]"
            }`}
          />
        </span>
      </div>
    </nav>
  );
}

export function MobileNavBox() {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  return (
    <>
      <nav className="shadow-lg pl-1 pr-5 sm:hidden justify-between items-center h-[10vh] flex">
        <div className="logo">
          <span className="font-bold text-3xl text-blue-600 hover:scale-105 cursor-pointer transition-all items-center flex gap-0">
            <img className="w-20" src={logo} alt="" />
          </span>
        </div>
        <div className="bg-blue-100 py-2 pl-2 pr-5 rounded-[1rem] flex items-center gap-1 w-[50%] text-blue-500">
          <FaSearch size={25} />
          <input type="search" className="w-full bg-blue-100 outline-none" />
        </div>
        <div className="flex items-center gap-8">
          <NavLink to="/" className="text-blue-500 hover:text-blue-200">
            <FaCartShopping size={25} />
          </NavLink>
        </div>
      </nav>
      <div className="sm:hidden flex items-center gap-8 font-semibold p-3 bg-blue-600 relative">
        <span onClick={() => setToggleNavbar(!toggleNavbar)}>
          <FaBars size={25} color="white" />
        </span>
        <menu
          className={`absolute top-full z-50 text-white bg-blue-600 left-0 h-[80vh] text-3xl flex flex-col transition-all duration-700 ${
            toggleNavbar ? "w-[100vw] flex" : "w-0 hidden"
          }`}
        >
          <NavLink
            to={"/"}
            className={({ isActive, isPending }) => {
              return isActive ? "bg-blue-500" : "";
            }}
          >
            <li className="border-b border-white py-10 px-3">
              Home <div className=""></div>
            </li>
          </NavLink>
          <NavLink
            to={"/catergories"}
            className={({ isActive, isPending }) => {
              return isActive ? "bg-blue-500" : "";
            }}
          >
            <li className="border-b border-white py-10 px-3">
              Categories
              <div className=""></div>
            </li>
          </NavLink>
          <NavLink
            to={"shop"}
            className={({ isActive, isPending }) => {
              return isActive ? "bg-blue-500" : "";
            }}
          >
            <li className="border-b border-white py-10 px-3">
              Shops
              <div className=""></div>
            </li>
          </NavLink>
          <NavLink
            to={"help"}
            className={({ isActive, isPending }) => {
              return isActive ? "bg-blue-500" : "";
            }}
          >
            <li className="border-b border-white py-10 px-3">
              Help
              <div className=""></div>
            </li>
          </NavLink>
        </menu>
      </div>
    </>
  );
}

export default NavBox;
