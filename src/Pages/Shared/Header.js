import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .then((err) => console.log(err));
  };

  const navItems = (
    <>
      <li>
        <Link className="px-3 py-1 m-2 border-b-[2px] rounded-md" to="/">
          Home
        </Link>
      </li>
      <li tabIndex="0">
        <Link className="px-3 py-1 m-2 border-b-[2px] rounded-md" to="/blogs">
          Blogs
        </Link>
      </li>
      {/* if user logged in then these route will be shown */}

      {/* if user logged-in login+signup button will be hide and signout button will be shown */}
      {user ? (
        <div className="flex">
          <li tabIndex="0">
            <Link
              className="px-3 py-1 mx-2 border-b-[2px] rounded-md"
              to="/dashboard"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <button
              onClick={handleSignOut}
              className=" inline-block px-6 py-2.5 bg-primary text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
            >
              Sign out
            </button>
          </li>
        </div>
      ) : (
        <>
          <div>
            <Link
              to="/login"
              className="inline-block px-6 py-2 bg-primary text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out mx-1 w-24 m-2"
            >
              Login
            </Link>
          </div>
          <div>
            <Link
              to="/signup"
              className="inline-block px-6 py-2 border-[1px] border-primary text-black hover:text-white font-medium text-xs leading-tight uppercase rounded hover:bg-primary transition duration-150 ease-in-out mx-1 w-24 m-2"
            >
              Signup
            </Link>
          </div>
        </>
      )}
    </>
  );
  return (
    <div className=" shadow-md w-full">
      <div className="navbar text-black container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link
            to="/"
            className="text-xl font-bold btn-ghost p-1 active:scale-105"
          >
            Laptop HAVEN
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex navbar-end">
          <ul className="menu menu-horizontal p-0 flex justify-center items-center">
            {navItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
