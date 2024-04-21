import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-slate-900 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap drop-shadow-md">
            <span className="text-slate-400 uppercase rounded-lg px-1 tracking-tigher">
              Mern
            </span>
            <span className="text-yellow-600 uppercase tracking-tighter -ml-2 sm:-ml-2.5">
              Estate
            </span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-2 rounded-lg flex items-center justify-between px-4 border border-gray-600">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-slate-700 w-24 sm:w-52"
          />
          <FaSearch className="text-slate-800" />
        </form>

        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-500 hover:text-red-500 font-semibold cursor-pointer">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-500 hover:text-red-500 font-semibold cursor-pointer">
              About
            </li>
          </Link>

          <Link to="/sign-in">
            <li className=" text-slate-500 hover:text-red-500 font-semibold cursor-pointer">
              Sign in
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
