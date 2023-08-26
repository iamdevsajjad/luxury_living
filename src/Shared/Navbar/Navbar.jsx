import React from "react";

const Navbar = () => {
  return (
    <>
      <div className=" bg-[#F6F6F6] py-4">
        <div className="maindiv fullNav flex justify-between container mx-auto items-center">
          <div className="logo w-28">
            <img src="https://i.ibb.co/PQHrT0y/Group-33069.png" alt="" />
          </div>
          <div className="navLink">
            <ul className="flex font-semibold text-black">
              <li className="mx-5">
                <a href="">Home</a>
              </li>
              <li className="mx-5">
                <a href="">About Us</a>
              </li>
              <li className="mx-5">
                <a href="">Projects</a>
              </li>
              <li className="mx-5">
                <a href="">Contact</a>
              </li>
              <li className="mx-5">
                <a href="">Admin</a>
              </li>
            </ul>
          </div>
          <button className="bg-[#251D58] text-white px-7 py-2 rounded-sm hover:bg-blue-900 transition-all">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
