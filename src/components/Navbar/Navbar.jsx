import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [navContentVisible, setNavContentVisible] = useState(false);

  const toggleNavContent = (e) => {
    e.preventDefault();
    setNavContentVisible(!navContentVisible);
  };

  const myStyle = {
    backgroundColor: 'transparent',
  };

  return (
    <div className="" style={myStyle}>
      <nav className="w-full lg:px-40 sm:px-10 p-8 sm:flex justify-between items-center border-b-1">
        <div className="flex justify-between sm:py-0">
          <Link to="/" className="font-Roboto font-semibold text-2xl">
            Neiwi Tech
          </Link>

          <button
            className="text-blue-300 text-3xl sm:hidden block focus:outline-none"
            onClick={toggleNavContent}
          >
            &#9776;
          </button>
        </div>

        <ul
          className={`${
            navContentVisible ? 'block bg-white bg-opacity-100 rounded-lg w-full float-right absolute  justify-end z-10' : 'hidden'
          } sm:flex cursor-pointer`}
        >
          <li className="text-blue  py-4 px-6 sm:border-b-2 border text-blue-600 hover:text-blue-300 transition duration-200  hover:bg-gray-800 sm:hover:bg-transparent border-none">
            <Link to="/">Services</Link>
          </li>

          <li className="text-blue py-4 px-6 sm:border-b-2 border-transparent hover:border-blue-300 sm:hover:text-blue-300 transition hover:bg-gray-800 duration-200 sm:hover:bg-transparent">
            <Link to="/">Projects</Link>
          </li>
          <li className="text-blue py-4 px-6 sm:border-b-2 border-transparent hover:border-blue-300 sm:hover:text-blue-300 transition hover:bg-gray-800 duration-200 sm:hover:bg-transparent">
            <Link to="/">Why us</Link>
          </li>
          <li className="text-blue py-4 px-6 sm:border-b-2 border-transparent hover:border-blue-300 sm:hover:text-blue-300 transition hover:bg-gray-800 duration-200 sm:hover:bg-transparent">
            <Link to="/">Free Learning</Link>
          </li>
          <li className="text-blue py-4 px-6 sm:border-b-2 border-transparent hover:border-blue-300 sm:hover:text-blue-300 transition hover:bg-gray-800 duration-200 sm:hover:bg-transparent">
            <Link to="/">Youtube Channel</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
