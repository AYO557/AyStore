import { FaCartShopping } from "react-icons/fa6";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../assets/icons/ay-logo.svg";
import { FaSearch } from "react-icons/fa";

function App() {
  return (
    <div>
      <nav className="shadow-lg px-[140px] flex justify-between items-center h-[10vh]">
        <div className="logo">
          <h2 className="font-bold text-3xl text-blue-600 hover:scale-105 cursor-pointer transition-all items-center flex gap-0">
            <img className="w-14" src={logo} alt="" />
            AyStore
          </h2>
        </div>
        <menu className="flex items-center gap-8 font-semibold">
          <li className="nav-link">
            <NavLink>Home</NavLink>
            <div className=""></div>
          </li>
          <li className="nav-link">
            <NavLink>Categories</NavLink>
            <div className=""></div>
          </li>
          <li className="nav-link">
            <NavLink>Shops</NavLink>
            <div className=""></div>
          </li>
          <li className="nav-link">
            <NavLink>Help</NavLink>
            <div className=""></div>
          </li>
        </menu>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4 hidden">
            <Link
              to="auth/login"
              className="bg-blue-500 px-4 py-2 font-bold text-white rounded-md border border-blue-500 hover:border hover:border-blue-500 hover:text-blue-500 hover:bg-transparent"
            >
              Login
            </Link>
            <Link
              to="auth/signup"
              className="bg-blue-500 px-4 py-2 font-bold text-white rounded-md border border-blue-500 hover:border hover:border-blue-500 hover:text-blue-500 hover:bg-transparent"
            >
              Register
            </Link>
          </div>
          <NavLink to="/" className="text-blue-500 hover:text-blue-200">
            <FaCartShopping size={25} />
          </NavLink>
          <span className="text-blue-500 bg-blue-100 py-2 pl-2 pr-5 rounded-[1rem] hover:w-[150px] flex items-center gap-1 search">
            <FaSearch size={25} />
            <input
              type="search"
              className="w-[10px] bg-blue-100 outline-none text-black"
            />
          </span>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
